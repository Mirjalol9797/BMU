<script setup>
import { ref, onMounted } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, email } from "@vuelidate/validators";

const getContact = useContactPage();
const { t } = useI18n();
const errorText = ref(t("contact_page.required"));
const successModal = ref(false);
const modalText = ref(null);
const isLoading = ref(true);
const userData = ref({
  name: null,
  email: null,
  phone: null,
  message: null,
});

const userDataError = ref({
  name: { required },
  email: { required, email },
  phone: { required, minLength: minLength(19) },
  message: { required },
});

const v$1 = useVuelidate(userDataError, userData);

async function sendUserData() {
  let validate = v$1.value.$invalid;
  v$1.value.$touch();
  if (!validate) {
    try {
      const response = await getContact.sendContact(userData.value);

      // Обрабатываем успешный ответ
      if (response.success) {
        successModal.value = true;
        modalText.value = t("contact_page.data_sent_successfully");
        // Например, очищаем форму
        userData.value = {
          name: null,
          email: null,
          phone: null,
          message: null,
        };
        v$1.value.$reset();
      } else {
        // Обрабатываем ошибку, если бэкенд вернул ошибку
        modalText.value = "Ошибка при отправке данных. Повторите попытку позже";
      }
    } catch (error) {
      console.error("Произошла ошибка при отправке данных:", error.message);
    }
  }
}

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 700);
});

useSeoMeta({
  title: t("get_in_touch"),
  description: t("get_in_touch"),
  keywords: "BMU",
  ogTitle: t("get_in_touch"),
  ogDescription: t("get_in_touch"),
  ogImage: "/images/contact-page.webp",
  ogUrl: "https://bmu-edu.uz/contact",
  twitterCard: "summary_large_image",
  ogSiteName: "site_name",
  twitterUrl: "https://bmu-edu.uz/contact",
  twitterTitle: t("get_in_touch"),
  twitterDescription: t("get_in_touch"),
  twitterImage: "/images/contact-page.webp",
});
</script>
<template>
  <CBannerAllPage
    :title="$t('get_in_touch')"
    image="/images/contact-page.webp"
  />
  <div class="contact py-[100px] 768:py-[70px]">
    <div class="site-container">
      <div class="w-1/2 bg-[rgba(1,1,1,0.02)] p-12 mb-12 1024:w-full 768:p-6">
        <div class="text-2xl mb-9 font-medium">
          {{ $t("contact_page.contact_now") }}:
        </div>
        <div class="font-medium mb-[60px]">
          <div class="text-[#424343] flex-center mb-2">
            <div class="w-5 h-[1.5px] bg-[#424343] mr-2"></div>
            <span class="uppercase">{{ $t("contact_page.phone") }}</span>
          </div>
          <a href="tel:+998955119999" class="text-xl font-medium 768:text-base"
            >+998 95 511 99 99</a
          >
        </div>
        <div class="font-medium mb-[60px]">
          <div class="text-[#424343] flex-center mb-2">
            <div class="w-5 h-[1.5px] bg-[#424343] mr-2"></div>
            <span class="uppercase">{{ $t("contact_page.email") }}</span>
          </div>
          <a
            href="mailto:info@bmu-edu.uz"
            class="text-xl font-medium 768:text-base"
            >info@bmu-edu.uz</a
          >
        </div>
        <div class="font-medium">
          <div class="text-[#424343] flex-center mb-2">
            <div class="w-5 h-[1.5px] bg-[#424343] mr-2"></div>
            <span class="uppercase">{{ $t("contact_page.location") }}</span>
          </div>
          <div class="text-xl font-medium 768:text-base">
            {{ $t("contact_page.address") }}
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-6 768:grid-cols-1">
        <div class="p-12 bg-[rgba(1,1,1,0.02)] contact-form 768:p-6">
          <UiTmInput
            :label="$t('contact_page.your_name')"
            :error="v$1.name.$error"
            :errorText="errorText"
            v-model="userData.name"
            :placeholder="$t('contact_page.enter_name')"
          />
          <UiTmInput
            :label="$t('contact_page.your_email')"
            :error="v$1.email.$error"
            :errorText="errorText"
            v-model="userData.email"
            :placeholder="$t('contact_page.enter_email')"
          />
          <UiTmInput
            :label="$t('contact_page.your_phone_number')"
            dataMaska="+(998) ## ### ## ##"
            :error="v$1.phone.$error"
            :errorText="errorText"
            v-model="userData.phone"
            :placeholder="$t('contact_page.enter_phone_number')"
          />

          <UiTmTextarea
            :label="$t('contact_page.your_message')"
            :error="v$1.message.$error"
            :errorText="errorText"
            v-model="userData.message"
            :placeholder="$t('contact_page.enter_message')"
          />

          <button
            class="bg-[#648AC8] text-white py-4 px-7 rounded-full"
            @click="sendUserData"
          >
            {{ $t("contact_page.send_message") }}
          </button>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.607744450507!2d69.37976340169757!3d41.32850281679719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b82eea369d7%3A0xbc51733ffe66b99c!2sBritish%20Management%20University%20in%20Tashkent!5e0!3m2!1sru!2s!4v1734335103310!5m2!1sru!2s"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
  <UiTmModal v-if="successModal" width="480" classModal="rounded-[20px]">
    <template #modal_content>
      <div class="text-2xl font-medium text-center mb-8">
        {{ modalText }}
      </div>
      <button
        @click="successModal = false"
        class="text-base text-white py-2.5 px-6 bg-[#648AC8] rounded-full font-medium mx-auto flex"
      >
        Oк
      </button>
    </template>
  </UiTmModal>

  <UiTmLoader v-if="isLoading" />
</template>
<style lang="scss">
.contact {
  iframe {
    @media (max-width: 768px) {
      height: 400px;
    }
  }
  &-form {
    .form-item {
      margin-bottom: 24px;
    }
    label {
      span {
        margin-bottom: 8px;
        font-size: 20px;
        line-height: 28px;
        color: #010101;
      }
      .form-input {
        padding: 16px 32px;
        border-radius: 32px;
        border: 1px solid #424343;
        width: 100%;
        height: auto;
        font-size: 16px;
        color: #010101;
      }
      textarea {
        min-height: 150px;
      }
    }
  }
}
</style>
