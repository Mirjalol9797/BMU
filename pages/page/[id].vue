<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const { t } = useI18n();

const route = useRoute();
const settingsStore = useSettingsStore();
const { $axiosPlugin } = useNuxtApp();
const pageContent = ref(null);

function openApplyNowModal() {
  settingsStore.isApplyNowModal = true;
  document.querySelector("body").classList.add("open-modal");
}

async function getMainAbout() {
  settingsStore.isLoader = true;

  const res = await $axiosPlugin.get(
    `/api/page-by-slug?slug=${route.params.id}`
  );

  if (res.data.success) {
    pageContent.value = res.data.data;
  }

  settingsStore.isLoader = false;
}
await getMainAbout();

useSeoMeta({
  title: pageContent?.value?.title,
  description: t("static_seo.description"),
  keywords: "BMU",
  ogTitle: pageContent?.value?.title,
  ogDescription: t("static_seo.description"),
  ogImage: "/images/logo.png",
  ogUrl: "https://bmu-edu.uz/ru/",
  twitterCard: "summary_large_image",
  ogSiteName: "site_name",
  twitterUrl: "https://bmu-edu.uz/ru/",
  twitterTitle: pageContent?.value?.title,
  twitterDescription: t("static_seo.description"),
  twitterImage: "/images/logo.png",
});
</script>
<template>
  <div
    class="h-[240px] overflow-hidden relative text-white before:content-[''] before:inset-0 before:bg-[rgba(0,0,0,0.7)] before:absolute before:z-10 mb-16 1024:h-[160px]"
  >
    <img
      :src="pageContent?.image ? pageContent?.image : '/images/page-fon.jpg'"
      :alt="pageContent?.title"
      class="w-full relative z-0 top-[-50%]"
    />
    <div class="absolute z-10 bottom-0 w-full">
      <div
        class="site-container text-4xl font-bold !mb-14 768:text-2xl 768:!mb-10"
      >
        {{ pageContent?.title }}
      </div>
      <div
        class="bg-[rgba(255,255,255,0.2)] w-full 1024:hidden"
        v-if="pageContent?.additional_tab"
      >
        <ul
          class="flex items-center justify-start h-16 site-container font-semibold"
        >
          <li
            v-for="(menu, index) in pageContent?.additional_tab"
            :key="index"
            class="mr-6"
          >
            <nuxt-link :to="localePath(`/page/${menu?.slug}`)"
              >{{ menu.title }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="site-container dinamic-page">
    <div class="flex items-start mb-16 1024:flex-col">
      <div
        class="w-full mr-12 1024:mr-0 1024:mb-10"
        v-html="pageContent?.description"
      ></div>
      <div class="min-w-[340px] max-w-[340px] 640:w-full 640:max-w-full">
        <div class="bg-[#EBF3FF] p-6 mb-8">
          <div class="text-[#1C335F] mb-4 text-2xl font-bold">
            {{ $t("page.explore_frontier") }}
          </div>
          <div class="text-[#323B49] mb-9 font-medium">
            {{ $t("page.explore_horizons_possibilities_education") }}
          </div>
          <button
            class="py-3 px-8 bg-[#E22F24] text-white font-bold rounded-full"
            @click="openApplyNowModal"
          >
            {{ $t("apply_now") }}
          </button>
        </div>
        <div class="bg-[#EBF3FF] p-6">
          <div class="text-[#1C335F] mb-4 text-2xl font-bold">
            {{ $t("page.still_have_questions") }}
          </div>
          <div class="text-[#323B49] mb-9 font-medium">
            {{ $t("page.please_contact_information") }}
          </div>
          <a href="tel:998955119999" class="font-semibold text-[#2F78EE]">
            +998 95 511 99 99
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.dinamic-page {
  p {
    margin-bottom: 32px;
    line-height: 38px;
    color: #111827;
  }
}
</style>
