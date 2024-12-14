<script setup>
import { ref } from "vue";

const { t } = useI18n();
const { $axiosPlugin } = useNuxtApp();

const content = ref(null);
const settingsStore = useSettingsStore();

async function getAbout() {
  settingsStore.isLoader = true;

  const res = await $axiosPlugin.get(`/api/rector`);

  if (res.data.success) {
    content.value = res.data.data;
  }

  settingsStore.isLoader = false;
}
await getAbout();

useSeoMeta({
  title: content?.value?.title,
  description: t("static_seo.description"),
  keywords: "BMU",
  ogTitle: content?.value?.title,
  ogDescription: t("static_seo.description"),
  ogImage: "/images/logo.png",
  ogUrl: "https://bmu-edu.uz/ru/",
  twitterCard: "summary_large_image",
  ogSiteName: "site_name",
  twitterUrl: "https://bmu-edu.uz/ru/",
  twitterTitle: content?.value?.title,
  twitterDescription: t("static_seo.description"),
  twitterImage: "/images/logo.png",
});
</script>

<template>
  <div
    class="h-[180px] overflow-hidden relative text-white before:content-[''] before:inset-0 before:bg-[rgba(0,0,0,0.7)] before:absolute before:z-10 mb-16 1024:h-[160px]"
  >
    <img
      :src="content?.background ? content?.background : '/images/page-fon.jpg'"
      alt="title"
      class="w-full relative z-0 top-[-50%]"
    />
    <div class="absolute z-10 bottom-0 w-full">
      <div
        class="site-container text-4xl font-bold !mb-14 768:text-2xl 768:!mb-10"
      >
        {{ content?.title }}
      </div>
    </div>
  </div>

  <div class="site-container content">
    <div class="flex mb-16 768:flex-col">
      <div
        class="min-w-[400px] mr-12 768:min-w-[auto] 768:max-w-[60%] 768:w-full 768:mr-auto 768:mb-10 768:mx-auto"
      >
        <img :src="content?.image" :alt="content?.title" class="w-full" />
      </div>
      <div>
        <div v-html="content?.description"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.content {
  p {
    font-size: 14px;
    margin-bottom: 8px;
  }
}
</style>
