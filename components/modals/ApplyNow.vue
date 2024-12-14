<script setup>
import { ref, onMounted } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, email, sameAs } from "@vuelidate/validators";

const { t } = useI18n();
const settingsStore = useSettingsStore();
const { $axiosPlugin } = useNuxtApp();

const errorText = ref(t("apply_now_modal.required"));
const codeError = ref(null);
const phoneError = ref(null);
const passwordErrorText = ref("Пароли не совпадают");
const ieltsCertificateName = ref(t("apply_now_modal.ielts_certificate"));
const copyPassportName = ref(t("apply_now_modal.copy_your_passport"));
const applyContent = ref(true);
const viewSmsCodeField = ref(false);
const loaderBtn = ref(false);
const expireAt = ref(60);
const access_token = ref(null);
const smsCodeLoader = ref(false);
const user_id = ref(null);

// data for send phone api
const studentPhone = ref({
  phone: "+998 ",
});
const studentPhoneError = ref({
  phone: { required, minLength: minLength(19) },
});
const v$2 = useVuelidate(studentPhoneError, studentPhone);

// data for send sms code
const studentSmsCode = ref({
  code: null,
});
const studentSmsCodeError = ref({
  code: { required, minLength: minLength(4) },
});
const v$3 = useVuelidate(studentSmsCodeError, studentSmsCode);

// send data for apply api
const formData = ref({
  passport: null,
  first_name: null,
  last_name: null,
  father_name: null,
  birthday: null,
  email: null,
  phone: studentPhone?.value?.phone,
  telegram: "",
  ielts_score: null,
  ielts_writing: "",
  ielts_reading: "",
  ielts_listening: "",
  ielts_speaking: "",
  ielts_alternative: "",
  school_region: null,
  school_number: null,
  password: null,
  confirm_password: null,
  ielts_certificate: null,
  copy_passport: null,
});

const formDataError = ref({
  passport: { required },
  first_name: { required },
  last_name: { required },
  father_name: { required },
  birthday: { required },
  email: { required, email },
  ielts_score: { required },
  // ielts_writing: { required },
  // ielts_reading: { required },
  // ielts_listening: { required },
  // ielts_speaking: { required },
  school_region: { required },
  school_number: { required },
  password: { required, minLength: minLength(6) },
  confirm_password: {
    required,
    minLength: minLength(6),
    // sameAsPassword: sameAs("password"),
  },
  ielts_certificate: { required },
  copy_passport: { required },
});

const v$1 = useVuelidate(formDataError, formData);

watch(
  () => formData.value.ielts_score,
  (newValue) => {
    if (
      formData.value.ielts_score == "no_ielts" &&
      formData.value.ielts_alternative == ""
    ) {
      formData.value.ielts_certificate = "1";
    } else {
      formData.value.ielts_certificate = null;
    }
    console.log(newValue);
  }
);
watch(
  () => formData.value.ielts_alternative,
  (newValue) => {
    if (
      formData.value.ielts_score == "no_ielts" &&
      formData.value.ielts_alternative == ""
    ) {
      formData.value.ielts_certificate = "1";
    } else {
      formData.value.ielts_certificate = null;
    }
    console.log(newValue);
  }
);

function closeApplyNowModal() {
  settingsStore.isApplyNowModal = false;
  document.querySelector("body").classList.remove("open-modal");
}

function uploadIeltsCertificate(e) {
  ieltsCertificateName.value = e.target.files[0].name;
  formData.value.ielts_certificate = e.target.files[0];
}

function uploadCopyPassport(e) {
  copyPassportName.value = e.target.files[0].name;
  formData.value.copy_passport = e.target.files[0];
}

let timer;
function startTimer() {
  expireAt.value = localStorage.getItem("expireAt");
  timer = setInterval(() => {
    expireAt.value--;
    if (expireAt.value <= 0) {
      clearInterval(timer);
    }
  }, 1000);
}

async function checkConfirmNumber() {
  let validate = v$2.value.$invalid;
  v$2.value.$touch();
  if (!validate) {
    loaderBtn.value = true;

    await $axiosPlugin
      .post("/api/get-otp", {
        phone: studentPhone.value.phone,
      })
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          viewSmsCodeField.value = true;
          localStorage.setItem("expireAt", res.data.data.expireAt);
          localStorage.setItem("phone", studentPhone.value.phone);
          startTimer();
        } else {
          phoneError.value = res.data.message;
        }
      })
      .catch((error) => console.log(error));

    loaderBtn.value = false;
  }
}

async function getToken() {
  smsCodeLoader.value = true;
  codeError.value = null;
  let validate = v$3.value.$invalid;
  v$3.value.$touch();
  if (!validate) {
    await $axiosPlugin
      .post("/api/validate-otp", {
        phone: studentPhone.value.phone,
        code: studentSmsCode.value.code,
      })
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          access_token.value = res.data.data.access_token;
          user_id.value = res.data.data.user_id;
          localStorage.setItem("token", res.data.data.access_token);
        } else {
          codeError.value = res.data.message;
        }
      })
      .catch((error) => console.log(error));
  }

  smsCodeLoader.value = false;
}

function changePhoneNumber() {
  phoneError.value = null;
}

async function sendData() {
  loaderBtn.value = true;
  let validate = v$1.value.$invalid;
  console.log(validate);
  v$1.value.$touch();
  if (!validate) {
    const sendData = new FormData();
    sendData.append("passport", formData.value.passport);
    sendData.append("first_name", formData.value.first_name);
    sendData.append("last_name", formData.value.last_name);
    sendData.append("father_name", formData.value.father_name);
    sendData.append("birthday", formData.value.birthday);
    sendData.append("email", formData.value.email);
    sendData.append("ielts_writing", formData.value.ielts_writing);
    sendData.append("ielts_reading", formData.value.ielts_reading);
    sendData.append("ielts_listening", formData.value.ielts_listening);
    sendData.append("ielts_speaking", formData.value.ielts_speaking);
    sendData.append("phone", studentPhone?.value?.phone);
    sendData.append("telegram", formData.value.telegram);
    sendData.append("ielts_score", formData.value.ielts_score);
    sendData.append("ielts_alternative", formData.value.ielts_alternative);
    sendData.append("school_region", formData.value.school_region);
    sendData.append("school_name", formData.value.school_number);
    sendData.append("password", formData.value.password);
    sendData.append("ielts_file", formData.value.ielts_certificate);
    sendData.append("passport_file", formData.value.copy_passport);
    sendData.append("user_id", user_id.value);

    await $axiosPlugin
      .post("/api/apply", sendData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${access_token.value}`,
        },
      })
      .then((res) => {
        if (res.data.success) {
          applyContent.value = false;
          localStorage.clear();
        }
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }

  loaderBtn.value = false;
}

onMounted(() => {
  if (localStorage.getItem("token")) {
    access_token.value = localStorage.getItem("token");
  }
  if (localStorage.getItem("phone")) {
    studentPhone.value.phone = localStorage.getItem("phone");
  }
});
</script>
<template>
  <UiTmModal classModal="!pt-[52px] pb-[60px] px-[60px]">
    <template #modal_content>
      <button class="absolute top-0 right-0" @click="closeApplyNowModal">
        <img src="/icons/close-modal.svg" alt="close-modal" />
      </button>
      <div
        class="border-b border-[#cbd5e0] pb-5 text-2xl font-bold mb-8"
        v-if="applyContent"
      >
        {{ $t("apply_now_modal.title") }}
      </div>
      <template v-if="!access_token">
        <div
          class="flex items-end gap-6 mb-5 480:flex-col 480:gap-5 480:items-start"
        >
          <div class="w-1/2 480:mb-2 480:w-full">
            <UiTmInput
              :label="$t('apply_now_modal.phone_number')"
              dataMaska="+(998) ## ### ## ##"
              :error="v$2.phone.$error"
              :errorText="errorText"
              v-model="studentPhone.phone"
              class="absolute-error-text"
              @keyup="changePhoneNumber"
            />
            <div
              class="mt-1 flex items-center text-xs text-red-500 error-text absolute"
              v-if="phoneError"
            >
              <img src="/icons/alert-circle.svg" alt="" class="mr-1" />
              <span>{{ phoneError }}</span>
            </div>
          </div>

          <button
            class="px-4 py-2 text-white font-medium bg-[#E22F24] text-sm h-10 480:w-full"
            @click="checkConfirmNumber"
            v-if="!viewSmsCodeField"
            :class="loaderBtn ? 'site-btn-loader' : ''"
          >
            {{ $t("apply_now_modal.confirm_number") }}
          </button>
          <div
            class="flex items-center w-1/2 480:flex-col 480:items-start"
            v-if="viewSmsCodeField"
          >
            <div class="relative max-w-[150px] 480:max-w-full">
              <UiTmInput
                :label="$t('apply_now_modal.code_from_sms')"
                dataMaska="####"
                :error="v$3.code.$error"
                :errorText="errorText"
                v-model="studentSmsCode.code"
                class="absolute-error-text"
                :placeholder="$t('apply_now_modal.enter_code')"
                @keyup="getToken"
                :disabled="smsCodeLoader"
              />
              <div
                class="mt-1 flex items-center text-xs text-red-500 error-text absolute"
                v-if="codeError"
              >
                <img src="/icons/alert-circle.svg" alt="" class="mr-1" />
                <span>{{ codeError }}</span>
              </div>
            </div>

            <div
              class="ml-4 text-[#687588] text-sm mt-6 480:ml-0 480:mt-8"
              v-if="expireAt > 0"
            >
              {{ $t("apply_now_modal.get_new_code") }}
              <span class="text-[#E22F24]">{{ expireAt }}</span>
            </div>
            <button
              class="ml-4 font-medium text-sm text-[#2F78EE] mt-6 480:mt-8 480:ml-0"
              v-else
              @click="checkConfirmNumber"
            >
              {{ $t("apply_now_modal.resend_code") }}
            </button>
          </div>
        </div>
      </template>
      <template v-else>
        <div
          class="h-[500px] overflow-y-scroll site-scroll-design"
          v-if="applyContent"
        >
          <UiTmInput
            placeholder="e.g. AA1234567"
            :label="$t('apply_now_modal.identification_card')"
            class="mb-5"
            v-model="formData.passport"
            :error="v$1.passport.$error"
            :errorText="errorText"
          />
          <div class="flex gap-6 mb-5 480:flex-col 480:gap-5">
            <UiTmInput
              :label="$t('apply_now_modal.first_name')"
              v-model="formData.first_name"
              :error="v$1.first_name.$error"
              :errorText="errorText"
            />
            <UiTmInput
              :label="$t('apply_now_modal.last_name')"
              v-model="formData.last_name"
              :error="v$1.last_name.$error"
              :errorText="errorText"
            />
          </div>
          <div class="flex gap-6 mb-5 480:flex-col 480:gap-5">
            <UiTmInput
              :label="$t('apply_now_modal.father_name')"
              type="text"
              v-model="formData.father_name"
              :error="v$1.father_name.$error"
              :errorText="errorText"
            />
            <UiTmInput
              :label="$t('apply_now_modal.birthday')"
              type="date"
              v-model="formData.birthday"
              :error="v$1.birthday.$error"
              :errorText="errorText"
              placeholder="10.10.1997"
            />
          </div>
          <div class="flex gap-6 mb-5 480:flex-col 480:gap-5">
            <UiTmInput
              :label="$t('apply_now_modal.email_address')"
              type="email"
              v-model="formData.email"
              :error="v$1.email.$error"
              :errorText="errorText"
              placeholder="test@mail.ru"
            />
            <UiTmInput
              :label="$t('apply_now_modal.telegram')"
              :reqiredIcon="false"
              v-model="formData.telegram"
            />
          </div>
          <label class="mb-5 site-select">
            <span class="site-select__title">
              {{ $t("apply_now_modal.ielts_score") }}
              <span class="text-[#E03137]">*</span>
            </span>
            <select
              class="site-select__wrap"
              v-model="formData.ielts_score"
              :error="v$1.ielts_score.$error"
              :errorText="errorText"
              :class="{ error: v$1.ielts_score.$error }"
            >
              <option value="" disabled selected>
                {{ $t("apply_now_modal.if_you_have") }}
              </option>
              <option value="no_ielts">No IELTS</option>
              <option value="5.0">5.0</option>
              <option value="5.5">5.5</option>
              <option value="6.0">6.0</option>
              <option value="6.5">6.5</option>
              <option value="7.0">7.0</option>
              <option value="7.5">7.5</option>
              <option value="8.0">8.0</option>
              <option value="8.5">8.5</option>
              <option value="9.0">9.0</option>
            </select>
            <div
              class="mt-1 flex items-center text-xs text-red-500"
              v-if="v$1.ielts_score.$error"
            >
              <img
                src="/icons/alert-circle.svg"
                alt="alert-circle"
                class="mr-1"
              />
              <span data-v-9fad59cb="">{{
                $t("apply_now_modal.required")
              }}</span>
            </div>
          </label>

          <template v-if="formData.ielts_score !== 'no_ielts'">
            <div class="flex gap-6 mb-5 480:flex-col 480:gap-5">
              <UiTmInput
                :label="$t('apply_now_modal.ielts_listening')"
                type="number"
                v-model="formData.ielts_listening"
              />
              <UiTmInput
                :label="$t('apply_now_modal.ielts_reading')"
                type="number"
                v-model="formData.ielts_reading"
              />
            </div>
            <div class="flex gap-6 mb-5 480:flex-col 480:gap-5">
              <UiTmInput
                :label="$t('apply_now_modal.ielts_writing')"
                type="number"
                v-model="formData.ielts_writing"
              />
              <UiTmInput
                :label="$t('apply_now_modal.ielts_speaking')"
                type="number"
                v-model="formData.ielts_speaking"
              />
            </div>
          </template>

          <UiTmInput
            :label="$t('apply_now_modal.ielts_alternative')"
            class="mb-5"
            :reqiredIcon="false"
            v-model="formData.ielts_alternative"
          />
          <label class="mb-5 site-select">
            <span class="site-select__title">
              {{ $t("apply_now_modal.school_region") }}
              <span class="text-[#E03137]">*</span>
            </span>
            <select
              class="site-select__wrap"
              v-model="formData.school_region"
              :error="v$1.school_region.$error"
              :errorText="errorText"
              :class="{ error: v$1.school_region.$error }"
            >
              <option :value="$t('region.Toshkent')">
                {{ $t("region.Toshkent") }}
              </option>
              <option :value="$t('region.Qoraqalpogiston')">
                {{ $t("region.Qoraqalpogiston") }}
              </option>
              <option :value="$t('region.Andijon')">
                {{ $t("region.Andijon") }}
              </option>
              <option :value="$t('region.Buxoro')">
                {{ $t("region.Buxoro") }}
              </option>
              <option :value="$t('region.Jizzax')">
                {{ $t("region.Jizzax") }}
              </option>
              <option :value="$t('region.Qashqadaryo')">
                {{ $t("region.Qashqadaryo") }}
              </option>
              <option :value="$t('region.Navoiy')">
                {{ $t("region.Navoiy") }}
              </option>
              <option :value="$t('region.Namangan')">
                {{ $t("region.Namangan") }}
              </option>
              <option :value="$t('region.Samarqand')">
                {{ $t("region.Samarqand") }}
              </option>
              <option :value="$t('region.Surxondaryo')">
                {{ $t("region.Surxondaryo") }}
              </option>
              <option :value="$t('region.Sirdaryo')">
                {{ $t("region.Sirdaryo") }}
              </option>
              <option :value="$t('region.Toshkent_obl')">
                {{ $t("region.Toshkent_obl") }}
              </option>
              <option :value="$t('region.Fargona')">
                {{ $t("region.Fargona") }}
              </option>
              <option :value="$t('region.Xorazm')">
                {{ $t("region.Xorazm") }}
              </option>
            </select>
            <div
              class="mt-1 flex items-center text-xs text-red-500"
              v-if="v$1.school_region.$error"
            >
              <img
                src="/icons/alert-circle.svg"
                alt="alert-circle"
                class="mr-1"
              />
              <span data-v-9fad59cb="">{{
                $t("apply_now_modal.required")
              }}</span>
            </div>
          </label>
          <UiTmInput
            :label="$t('apply_now_modal.school_number_name')"
            class="mb-5"
            :placeholder="$t('apply_now_modal.please_type_number')"
            v-model="formData.school_number"
            :error="v$1.school_number.$error"
            :errorText="errorText"
          />
          <UiTmInput
            :label="$t('apply_now_modal.password')"
            class="mb-5"
            :placeholder="$t('apply_now_modal.please_passport_password')"
            type="password"
            v-model="formData.password"
            :error="v$1.password.$error"
            :errorText="errorText"
          />
          <UiTmInput
            :label="$t('apply_now_modal.confirm_password')"
            class="mb-5"
            :placeholder="$t('apply_now_modal.confirm_password')"
            type="password"
            v-model="formData.confirm_password"
            :error="v$1.confirm_password.$error"
            :errorText="errorText"
          />
          <!--  -->
          <div
            class="mb-4"
            v-if="
              !(
                formData.ielts_score == 'no_ielts' &&
                formData.ielts_alternative == ''
              )
            "
          >
            <label
              class="inline-flex items-center bg-[#F1F2F4] py-2.5 px-3 text-sm cursor-pointer"
            >
              <input
                type="file"
                class="w-0 h-0"
                @change="uploadIeltsCertificate"
                accept="image/*,.pdf"
              />
              <img
                src="/icons/upload-file-icon.svg"
                alt="upload-file-icon"
                class="mr-3"
              />
              <span class="break-all">{{ ieltsCertificateName }}</span>
            </label>
            <div
              class="mt-1 flex items-center text-xs text-red-500"
              v-if="v$1.ielts_certificate.$error"
            >
              <img
                src="/icons/alert-circle.svg"
                alt="alert-circle"
                class="mr-1"
              />
              <span>{{ $t("apply_now_modal.required") }}</span>
            </div>
          </div>

          <div class="mb-6">
            <label
              class="inline-flex items-center bg-[#F1F2F4] py-2.5 px-3 text-sm cursor-pointer"
            >
              <input
                type="file"
                class="w-0 h-0"
                @change="uploadCopyPassport"
                accept="image/*,.pdf"
              />
              <img
                src="/icons/upload-file-icon.svg"
                alt="upload-file-icon"
                class="mr-3"
              />
              <span class="break-all">{{ copyPassportName }}</span>
            </label>
            <div
              class="mt-1 flex items-center text-xs text-red-500"
              v-if="v$1.copy_passport.$error"
            >
              <img
                src="/icons/alert-circle.svg"
                alt="alert-circle"
                class="mr-1"
              />
              <span>{{ $t("apply_now_modal.required") }}</span>
            </div>
          </div>

          <label class="flex items-center text-[#687588] text-xs">
            <input type="checkbox" class="mr-2.5" checked />
            <div>
              {{ $t("apply_now_modal.by_submitting_agree") }}
              <nuxt-link
                :to="localePath('/page/privacy-policy')"
                class="underline"
                target="_blank"
              >
                {{ $t("apply_now_modal.privacy_policy") }} </nuxt-link
              > 
            </div>
          </label>

          <button
            class="w-full h-10 bg-[#E22F24] flex items-center justify-center font-bold text-white mt-10"
            @click="sendData"
            :class="loaderBtn ? 'site-btn-loader' : ''"
          >
            {{ $t("apply_now_modal.submit") }}
          </button>
        </div>
        <div class="flex flex-col items-center" v-else>
          <img
            src="/icons/apply-now-modal-icons.svg"
            alt="modal-icons"
            class="mb-8"
          />
          <div class="text-2xl mb-5 font-bold">
            {{ $t("apply_now_modal.youre_all_set") }}
          </div>
          <div class="font-medium 768:text-center">
            {{ $t("apply_now_modal.our_experts_touch_shortly") }}
          </div>
        </div>
      </template>
    </template>
  </UiTmModal>
</template>
<style lang="scss"></style>
