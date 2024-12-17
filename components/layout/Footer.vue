<script setup>
const settingsStore = useSettingsStore();

const getFooterMenu = useApiMenu();

const { data: dataFooterMenu } = useAsyncData("FooterMenu", () =>
  getFooterMenu.getFooterMenu()
);
</script>

<template>
  <footer class="pt-[100px] pb-8 footer">
    <div class="site-container">
      <div class="pb-6 border-b border-[#01010133]">
        <nuxt-link :to="localePath('/')">
          <img src="/images/site-logo.png" alt="" class="w-[190px]" />
        </nuxt-link>
      </div>
      <div
        class="py-[60px] flex gap-4 1024:flex-wrap 1024:gap-0 1024:justify-between"
      >
        <div
          v-for="(menu, index) in dataFooterMenu.data.tree"
          :key="index"
          class="w-1/5 1024:w-1/3 1024:mb-6 640:!w-full"
        >
          <nuxt-link
            :to="
              localePath(
                menu?.url ? `${menu?.url}` : `/page/${menu?.page?.slug}`
              )
            "
            class="block text-xl mb-5"
            >{{ menu.title }}</nuxt-link
          >
          <nuxt-link
            :to="
              localePath(
                item?.url ? `${item?.url}` : `/page/${item?.page?.slug}`
              )
            "
            class="block text-[#424343] mb-4"
            v-for="(item, index) in menu.children"
            :key="index"
          >
            {{ item.title }}
          </nuxt-link>
        </div>

        <div class="w-1/5 1024:w-1/2 640:!w-full">
          <nuxt-link to="/" class="block text-xl mb-6">Contact</nuxt-link>
          <div class="flex-center gap-2 text-[#424343] mb-5">
            <img
              src="../../public/icons/header/phone.svg"
              alt="phone"
              class="w-5"
            />
            <a href="tel:+998 95 511 99 99">+998 95 511 99 99</a>
          </div>
          <div class="flex-center gap-2 text-[#424343] mb-5">
            <img src="" alt="" class="w-5" />
            <a href="mailto:info@bmu-edu.uz">info@bmu-edu.uz</a>
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
