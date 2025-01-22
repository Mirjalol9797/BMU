<script setup>
import { useAsyncData } from "nuxt/app";
import { useRoute } from "vue-router";

const getNewsDetail = useApiNewsDetail();
const isLoading = ref(false);
const route = useRoute();
const { t } = useI18n();

// const { data: dataNewsDetail } = useAsyncData("NewsDetail", () =>
//   getNewsDetail.getNewsDetail(route.params.id)
// );

const { data: dataNewsDetail } = useAsyncData("NewsDetail", async () => {
  isLoading.value = true; // Включаем лоадер
  try {
    return await getNewsDetail.getNewsDetail(route.params.id);
  } finally {
    isLoading.value = false; // Выключаем лоадер
  }
});

useSeoMeta({
  title: dataNewsDetail.value?.data?.news?.title,
  description: dataNewsDetail.value?.data?.news?.title,
  keywords: "BMU",
  ogTitle: dataNewsDetail.value?.data?.news?.title,
  ogDescription: dataNewsDetail.value?.data?.news?.title,
  ogImage: dataNewsDetail.value?.data?.news?.image,
  ogUrl: "https://bmu-edu.uz/news-detail",
  twitterCard: "summary_large_image",
  ogSiteName: "site_name",
  twitterUrl: "https://bmu-edu.uz/news-detail",
  twitterTitle: dataNewsDetail.value?.data?.news?.title,
  twitterDescription: dataNewsDetail.value?.data?.news?.title,
  twitterImage: dataNewsDetail.value?.data?.news?.image,
});
</script>
<template>
  <div class="template">
    <CBannerAllPage
      :title="dataNewsDetail?.data?.news?.title"
      :image="dataNewsDetail?.data?.news?.image"
    />

    <div class="site-container !py-[100px]">
      <div class="text-[#424343] font-medium text-2xl mb-5 text-center">
        {{ dataNewsDetail?.data?.news?.category }}
      </div>
      <div v-html="dataNewsDetail?.data?.news?.description"></div>
    </div>
  </div>

  <UiTmLoader v-if="isLoading" />
</template>
<style lang="scss" scoped></style>
