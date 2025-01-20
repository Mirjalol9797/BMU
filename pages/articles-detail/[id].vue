<script setup>
import { useAsyncData } from "nuxt/app";
import { useRoute } from "vue-router";

const getArticles = useApiArticles();
const isLoading = ref(false);
const route = useRoute();

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
