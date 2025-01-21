<script setup>
import { useAsyncData } from "nuxt/app";
import { useRoute } from "vue-router";

const getArticles = useApiArticles();
const isLoading = ref(false);
const route = useRoute();
const { t } = useI18n();

const { data: dataArticlesDetail } = useAsyncData(
  "ArticlesDetail",
  async () => {
    isLoading.value = true; // Включаем лоадер
    try {
      return await getArticles.getArticlesDetail(route.params.id);
    } finally {
      isLoading.value = false; // Выключаем лоадер
    }
  }
);

useSeoMeta({
  title: t("our_news_articles"),
  description: t("our_news_articles"),
  keywords: "BMU",
  ogTitle: t("our_news_articles"),
  ogDescription: t("our_news_articles"),
  ogImage: "/images/logo.png",
  ogUrl: "https://bmu-edu.uz/articles-detail",
  twitterCard: "summary_large_image",
  ogSiteName: "site_name",
  twitterUrl: "https://bmu-edu.uz/articles-detail",
  twitterTitle: t("our_news_articles"),
  twitterDescription: t("our_news_articles"),
  twitterImage: "/images/logo.png",
});
</script>
<template>
  <div class="template">
    <CBannerAllPage
      :title="dataArticlesDetail?.data?.article?.title"
      :image="dataArticlesDetail?.data?.article?.image"
    />

    <div class="site-container !py-[100px]">
      <div
        class="text-[#424343] font-medium text-2xl mb-5 text-center uppercase"
      >
        {{ dataArticlesDetail?.data?.article?.category }}
      </div>
      <div v-html="dataArticlesDetail?.data?.article?.description"></div>
    </div>
  </div>

  <UiTmLoader v-if="isLoading" />
</template>
<style lang="scss" scoped></style>
