<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const { t } = useI18n();
const { $axiosPlugin } = useNuxtApp();

const content = ref(null);
const settingsStore = useSettingsStore();

async function getAbout() {
  settingsStore.isLoader = true;

  const res = await $axiosPlugin.get(`/api/vision-mission-goals`);

  if (res.data.success) {
    content.value = res.data.data;
  }

  settingsStore.isLoader = false;
}
await getAbout();

useSeoMeta({
  title: t("vision-mission-goals"),
  description: t("static_seo.description"),
  keywords: "BMU",
  ogTitle: t("vision-mission-goals"),
  ogDescription: t("static_seo.description"),
  ogImage: "/images/logo.png",
  ogUrl: "https://bmu-edu.uz/ru/",
  twitterCard: "summary_large_image",
  ogSiteName: "site_name",
  twitterUrl: "https://bmu-edu.uz/ru/",
  twitterTitle: t("vision-mission-goals"),
  twitterDescription: t("static_seo.description"),
  twitterImage: "/images/logo.png",
});
</script>

<template>
  <div
    class="h-[180px] overflow-hidden relative text-white before:content-[''] before:inset-0 before:bg-[rgba(0,0,0,0.7)] before:absolute before:z-10 mb-16 1024:h-[160px] 768:mb-8"
  >
    <img
      :src="
        content?.background?.image
          ? content?.background?.image
          : '/images/page-fon.jpg'
      "
      :alt="t('vision-mission-goals')"
      class="w-full relative z-0 top-[-50%]"
    />
    <div class="absolute z-10 bottom-0 w-full">
      <div
        class="site-container text-4xl font-bold !mb-14 768:text-2xl 768:!mb-10"
      >
        {{ $t("vision-mission-goals") }}
      </div>
    </div>
  </div>
  <div class="content">
    <div
      class="flex items-center 1024:flex-col"
      v-for="(item, index) in content.data"
      :key="index"
      :class="index % 2 == 1 ? 'flex-row-reverse' : ''"
    >
      <div class="w-1/2 pl-2.5 1024:w-full">
        <div
          class="max-w-[600px] ml-auto pr-10 1024:max-w-full 1024:py-8"
          :class="index == 1 ? 'mr-auto !ml-0 pl-10 pr-0 1024:pl-0' : ''"
        >
          <div
            class="text-4xl mb-10 font-bold 768:text-2xl 480:text-xl relative after:content-[''] after:h-1 after:w-[250px] after:bg-[#e22f24] after:absolute after:left-0 after:bottom-[-16px]"
          >
            {{ item.title }}
          </div>
          <div v-html="item.description"></div>
        </div>
      </div>
      <div class="w-1/2 1024:w-full">
        <img :src="item.image" :alt="item.title" />
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
