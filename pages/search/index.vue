<script setup>
import { useRoute } from "vue-router";
const { t } = useI18n();
const route = useRoute();
const settingsStore = useSettingsStore();
const searchData = ref(null);
const { $axiosPlugin } = useNuxtApp();

async function getSearchData() {
  settingsStore.isLoader = true;

  await $axiosPlugin
    .post("/api/search", { text: route.query.text })
    .then((res) => {
      if (res.data.success) {
        searchData.value = res.data.data.merged_results;
      }
    })
    .catch((error) => console.log(error));

  settingsStore.isLoader = false;
}

getSearchData();

useSeoMeta({
  title: settingsStore.textSearch,
  description: t("static_seo.description"),
  keywords: settingsStore.textSearch,
  ogTitle: settingsStore.textSearch,
  ogDescription: t("static_seo.description"),
  ogImage: "/images/logo.png",
  ogUrl: "https://bmu-edu.uz/ru/",
  twitterCard: "summary_large_image",
  ogSiteName: "site_name",
  twitterUrl: "https://bmu-edu.uz/ru/",
  twitterTitle: settingsStore.textSearch,
  twitterDescription: t("static_seo.description"),
  twitterImage: "/images/logo.png",
});
</script>

<template>
  <div class="py-10 header-shadow">
    <div class="site-container">
      <div class="text-4xl font-bold mb-12 text-[#111827] 768:text-xl 768:mb-8">
        {{ $t("search_result") }}
      </div>
      <div v-if="searchData?.length > 0">
        <div
          class="pb-8 mb-8 border-b border-[#E9EAEC] 768:pb-4 768:mb-4"
          v-for="(search, index) in searchData"
          :key="index"
        >
          <nuxt-link
            :to="localePath(`${search.url ? search.url : '/'}`)"
            class="text-2xl font-bold mb-4 text-[#1C335F] inline-block hover:text-[#2F78EE] 768:text-base"
          >
            {{ search.title }}
          </nuxt-link>
          <div
            class="text-[#111827] 768:text-sm search-desc"
            v-html="search.description"
          ></div>
        </div>
      </div>
      <div class="text-xl" v-else>
        {{ $t("data_not_found") }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.search-desc {
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  line-height: 24px;
  min-height: 36px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
