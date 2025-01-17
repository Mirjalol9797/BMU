<script setup>
import { useAsyncData } from "nuxt/app";
import { useRoute } from "vue-router";

const getNewsDetail = useApiNewsDetail();

const route = useRoute();

const { data: dataNewsDetail } = useAsyncData("NewsDetail", () =>
  getNewsDetail.getNewsDetail(route.params.id)
);

console.log("route", route.params.id);
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
</template>
<style lang="scss" scoped></style>
