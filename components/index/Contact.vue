<script setup></script>

<template>
  <section
    class="pt-[64px] pb-[80px] contact 768:bg-[#EBF3FF] 768:pt-10 768:pb-14"
  >
    <div class="site-container">
      <div class="mb-[56px] text-3xl font-bold 768:mb-9 768:text-2xl">
        {{ $t("contacts") }}
      </div>
      <div
        class="flex-center px-[50px] py-10 bg-[#EBF3FF] 768:flex-col 768:p-0 768:!items-start"
      >
        <div class="w-1/3 flex-center 768:w-full 768:mb-7">
          <div class="w-[68px] h-[68px] mr-6">
            <img
              src="/icons/contact-telegram.svg"
              alt="tg"
              class="w-full h-full object-contain"
            />
          </div>
          <div>
            <div class="font-medium mb-2">{{ $t("telegram_bot") }}</div>
            <a
              href="https://t.me/BMUedu"
              target="_blank"
              class="font-semibold text-[#2F78EE]"
            >
              {{ $t("send_telegram") }}
            </a>
          </div>
        </div>
        <div class="w-1/3 flex-center 768:w-full 768:mb-7">
          <div class="w-[68px] h-[68px] mr-6">
            <img
              src="/icons/contact-email.svg"
              alt="email"
              class="w-full h-full object-contain"
            />
          </div>
          <div>
            <div>{{ $t("email_address") }}</div>
            <a
              href="mailto:Info@bmu-edu.uz"
              target="_blank"
              class="font-semibold text-[#2F78EE]"
            >
              Info@bmu-edu.uz
            </a>
          </div>
        </div>
        <div class="w-1/3 flex-center 768:w-full">
          <div class="w-[68px] h-[68px] mr-6">
            <img
              src="/icons/contact-phone.svg"
              alt="phone"
              class="w-full h-full object-contain"
            />
          </div>
          <div>
            <div>{{ $t("phone_number") }}</div>
            <a href="tel:998955119999" class="font-semibold text-[#2F78EE]">
              +998 95 511 99 99
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang=""></style>
