<script setup>
import { ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, email } from "@vuelidate/validators";

const getContact = useContactPage();
const { t } = useI18n();
const errorText = ref(t("apply_now_modal.required"));
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

function sendUserData() {
  let validate = v$1.value.$invalid;
  v$1.value.$touch();
  if (!validate) {
    getContact.sendContact(userData.value);
  }
}
</script>
<template>
  <CBannerAllPage title="Distinguished Faculty Memebers" />
  <div class="contact py-[100px] 768:py-[70px]">
    <div class="site-container">
      <div class="w-1/2 bg-[rgba(1,1,1,0.02)] p-12 mb-12 1024:w-full 768:p-6">
        <div class="text-2xl mb-9 font-medium">Contact Now:</div>
        <div class="font-medium mb-[60px]">
          <div class="text-[#424343] flex-center mb-2">
            <div class="w-5 h-[1.5px] bg-[#424343] mr-2"></div>
            <span>PHONE</span>
          </div>
          <a href="tel:+998955119999" class="text-xl font-medium 768:text-base"
            >+998 95 511 99 99</a
          >
        </div>
        <div class="font-medium mb-[60px]">
          <div class="text-[#424343] flex-center mb-2">
            <div class="w-5 h-[1.5px] bg-[#424343] mr-2"></div>
            <span>EMAIL</span>
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
            <span>LOCATION</span>
          </div>
          <div class="text-xl font-medium 768:text-base">
            Mirzo Ulugbek district, Amir Temur mahalla, Mirzo Bobur street 35,
            Tashkent, Uzbekistan
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-6 768:grid-cols-1">
        <div class="p-12 bg-[rgba(1,1,1,0.02)] contact-form 768:p-6">
          <UiTmInput
            label="Your Name"
            :error="v$1.name.$error"
            :errorText="errorText"
            v-model="userData.name"
            placeholder="Enter Name"
          />
          <UiTmInput
            label="Your Email"
            :error="v$1.email.$error"
            :errorText="errorText"
            v-model="userData.email"
            placeholder="Enter Email"
          />
          <UiTmInput
            label="Your Phone Number"
            dataMaska="+(998) ## ### ## ##"
            :error="v$1.phone.$error"
            :errorText="errorText"
            v-model="userData.phone"
            placeholder="Enter Phone Number"
          />

          <UiTmTextarea
            label="Your Message"
            :error="v$1.message.$error"
            :errorText="errorText"
            v-model="userData.message"
            placeholder="Enter Message"
          />

          <button
            class="bg-[#648AC8] text-white py-4 px-7 rounded-full"
            @click="sendUserData"
          >
            Send Message
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
