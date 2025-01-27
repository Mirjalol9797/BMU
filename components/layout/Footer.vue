<script setup>
const settingsStore = useSettingsStore();

const getFooterMenu = useApiMenu();

const { data: dataFooterMenu } = useAsyncData("FooterMenu", () =>
  getFooterMenu.getFooterMenu()
);
</script>

<template>
  <footer class="pt-[100px] pb-8 footer 768:py-[70px]">
    <div class="site-container">
      <div class="pb-6 border-b border-[#01010133]">
        <nuxt-link :to="localePath('/')">
          <img src="/images/site-logo.png" alt="" class="w-[190px]" />
        </nuxt-link>
      </div>
      <div
        class="py-[60px] flex gap-4 1024:flex-wrap 1024:gap-0 1024:justify-between 768:py-10"
      >
        <div
          v-for="(menu, index) in settingsStore.footerMenu?.data?.tree"
          :key="index"
          class="w-1/5 1024:w-1/3 1024:mb-6 640:!w-full"
        >
          <nuxt-link
            :to="
              menu?.url
                ? localePath(`/${menu?.url}`)
                : menu?.page_slug
                ? localePath(`/page/${menu?.page_slug}`)
                : ''
            "
            class="block text-xl mb-5 768:mb-3 768:text-lg"
            >{{ menu.title }}</nuxt-link
          >
          <nuxt-link
            :to="
              item?.url
                ? localePath(`/${item?.url}`)
                : item?.page_slug
                ? localePath(`/page/${item?.page_slug}`)
                : ''
            "
            class="block text-[#424343] mb-4 last:mb-0"
            v-for="(item, index) in menu.children"
            :key="index"
          >
            {{ item.title }}
          </nuxt-link>
        </div>

        <div class="w-1/5 1024:w-1/2 640:!w-full">
          <nuxt-link to="/" class="block text-xl mb-6 768:text-lg">{{
            $t("contacts")
          }}</nuxt-link>
          <div class="flex-center gap-2 text-[#424343] mb-5">
            <img src="/icons/header/phone.svg" alt="phone" class="w-5" />
            <a href="tel:+998955119999">+998 95 511 99 99</a>
          </div>
          <div class="flex-center gap-2 text-[#424343] mb-5">
            <img src="/icons/header/sms.svg" alt="sms" class="w-5" />
            <a href="mailto:info@bmu-edu.uz">info@bmu-edu.uz</a>
          </div>
          <div class="mb-5 flex items-center gap-6">
            <a
              href="https://t.me/BMUedu"
              target="_blank"
              class="w-5 h-5 inline-block"
            >
              <img src="/icons/social/tg.svg" alt="" />
            </a>
            <a
              href="https://www.linkedin.com/company/british-management-university"
              target="_blank"
              class="w-5 h-5 inline-block"
            >
              <img src="/icons/social/in.svg" alt="" />
            </a>
            <a
              href="https://www.facebook.com/bmuedutashkent/"
              target="_blank"
              class="w-5 h-5 inline-block"
            >
              <img src="/icons/social/fc.svg" alt="" />
            </a>
            <a
              href="https://www.youtube.com/c/BritishManagementUniversity"
              target="_blank"
              class="w-5 h-5 inline-block"
            >
              <img src="/icons/social/yt.svg" alt="" />
            </a>
            <a
              href="https://www.instagram.com/bmu_uz/"
              target="_blank"
              class="w-5 h-5 inline-block"
            >
              <img src="/icons/social/ig.svg" alt="" />
            </a>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.607744450507!2d69.37976340169757!3d41.32850281679719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b82eea369d7%3A0xbc51733ffe66b99c!2sBritish%20Management%20University%20in%20Tashkent!5e0!3m2!1sru!2s!4v1734335103310!5m2!1sru!2s"
            width="100%"
            height="150"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div class="text-center">
        © Copyright 2024 - British Management University
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@media (max-width: 640px) {
  .footer {
    iframe {
      height: 300px;
    }
  }
}
</style>
