<script setup>
import { onMounted } from "vue";
import { useAsyncData } from "nuxt/app";
import { useRoute } from "vue-router";

const { t } = useI18n();
const route = useRoute();
const getPages = useApiPages();
const isLoading = ref(false);

const { data: dataPage } = useAsyncData("Page", async () => {
  isLoading.value = true; // Включаем лоадер
  try {
    return await getPages.getPage(route.params.slug);
  } finally {
    isLoading.value = false; // Выключаем лоадер
  }
});

console.log("dataPage?.data?", dataPage);

useSeoMeta({
  title: dataPage.value?.data?.title,
  description: t("static_seo.description"),
  keywords: "BMU",
  ogTitle: dataPage.value?.data?.title,
  ogDescription: t("static_seo.description"),
  ogImage: dataPage.value?.data?.background,
  ogUrl: "https://bmu-edu.uz/ru/",
  twitterCard: "summary_large_image",
  ogSiteName: "site_name",
  twitterUrl: "https://bmu-edu.uz/ru/",
  twitterTitle: dataPage.value?.data?.title,
  twitterDescription: t("static_seo.description"),
  twitterImage: dataPage.value?.data?.background,
});
</script>

<template>
  <div class="dynamic-pages">
    <TemplatesCTemplateContent
      v-if="dataPage?.data?.page_id == 0"
      :content="dataPage?.data"
    />
    <TemplatesCTemplateImage v-if="dataPage?.data?.page_id == 1" />
    <TemplatesCTemplateSimple v-if="dataPage?.data?.page_id == 2" />
    <TemplatesCTemplateItems
      v-if="dataPage?.data?.page_id == 3"
      :content="dataPage?.data"
    />
    <TemplatesCTemplateRandom
      v-if="dataPage?.data?.page_id == 4"
      :content="dataPage?.data"
    />
    <div v-if="dataPage?.data?.page_id == 5">page 5</div>
    <div v-if="dataPage?.data?.page_id == 6">page 6</div>
    <CFaqs v-if="dataPage?.data?.has_faq" />
  </div>

  <UiTmLoader v-if="isLoading" />
</template>

<style lang="scss" scoped></style>
