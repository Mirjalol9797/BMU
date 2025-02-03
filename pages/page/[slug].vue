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

useSeoMeta({
  title: dataPage.value?.data?.title,
  description: dataPage.value?.data?.title,
  keywords: "BMU",
  ogTitle: dataPage.value?.data?.title,
  ogDescription: dataPage.value?.data?.title,
  ogImage: dataPage.value?.data?.background,
  ogUrl: "https://bmu-edu.uz",
  twitterCard: "summary_large_image",
  ogSiteName: "site_name",
  twitterUrl: "https://bmu-edu.uz",
  twitterTitle: dataPage.value?.data?.title,
  twitterDescription: dataPage.value?.data?.title,
  twitterImage: dataPage.value?.data?.background,
});
</script>

<template>
  <div class="dynamic-pages">
    <CBannerAllPage
      :title="dataPage?.data?.title"
      :image="dataPage?.data?.background"
    />
    <CSettingStandart v-if="dataPage?.data?.has_setting" />
    <TemplatesCTemplateContent
      v-if="dataPage?.data?.page_id == 0"
      :content="dataPage?.data"
    />
    <TemplatesCTemplateImage
      v-if="dataPage?.data?.page_id == 1"
      :content="dataPage?.data"
    />
    <TemplatesCTemplateSimple
      v-if="dataPage?.data?.page_id == 2"
      :content="dataPage?.data"
    />
    <TemplatesCTemplateItems
      v-if="dataPage?.data?.page_id == 3"
      :content="dataPage?.data"
    />
    <TemplatesCTemplateRandom
      v-if="dataPage?.data?.page_id == 4"
      :content="dataPage?.data"
    />
    <TemplatesCTemplateBachelors
      v-if="dataPage?.data?.page_id == 5"
      :content="dataPage?.data"
    />
    <TemplatesCTemplateAccardion
      v-if="dataPage?.data?.page_id == 6"
      :content="dataPage?.data"
    />
    <CFaqs v-if="dataPage?.data?.has_faq" />
    <CGallery v-if="dataPage?.data?.has_gallery" />
  </div>

  <UiTmLoader v-if="isLoading" />
</template>

<style lang="scss">
div[style*="background:#eeeeee"] {
  background: #648ac8 !important;
  a {
    color: #fff !important;
  }
}
</style>
