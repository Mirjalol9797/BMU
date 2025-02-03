<script setup>
import { onMounted } from "vue";
import { useAsyncData } from "nuxt/app";
const { t } = useI18n();
const settingsStore = useSettingsStore();

useSeoMeta({
  title: t("static_seo.title"),
  description: t("static_seo.description"),
  keywords: "BMU",
  ogTitle: t("static_seo.title"),
  ogDescription: t("static_seo.description"),
  ogImage: "/images/logo.png",
  ogUrl: "https://bmu-edu.uz",
  twitterCard: "summary_large_image",
  ogSiteName: "site_name",
  twitterUrl: "https://bmu-edu.uz",
  twitterTitle: t("static_seo.title"),
  twitterDescription: t("static_seo.description"),
  twitterImage: "/images/logo.png",
});

const getSliders = useApiSliders();
const getMainPagesData = useApiMainPage();

// fetch api
const { data: dataSlider } = useAsyncData("Slider", () =>
  getSliders.getSlider()
);

const { data: dataScholarlyCommunities } = useAsyncData(
  "ScholarlyCommunities",
  () => getMainPagesData.getScholarlyCommunities()
);

const { data: dataPartnerUniversities } = useAsyncData(
  "PartnerUniversities",
  () => getMainPagesData.getPartnerUniversities()
);

const { data: dataOurAcademicPrograms } = useAsyncData(
  "OurAcademicPrograms",
  () => getMainPagesData.getOurAcademicPrograms()
);

const { data: dataWhatSetsUsApart } = useAsyncData("WhatSetsUsApart", () =>
  getMainPagesData.getWhatSetsUsApart()
);

const { data: dataForgingStrategic } = useAsyncData("ForgingStrategic", () =>
  getMainPagesData.getForgingStrategic()
);

const { data: dataDiscoverStudentThink } = useAsyncData(
  "DiscoverStudentThink",
  () => getMainPagesData.getDiscoverStudentThink()
);

const { data: dataNews } = useAsyncData("News", () =>
  getMainPagesData.getNews()
);
</script>

<template>
  <div class="main-page">
    <IndexCSlider :sliderData="dataSlider?.data?.sliders" />
    <!-- <IndexCCounts /> -->
    <IndexCWelcome :content="dataScholarlyCommunities?.data" />
    <IndexCPartnerUniversities :content="dataPartnerUniversities?.data" />
    <IndexCAcademicPrograms :content="dataOurAcademicPrograms?.data" />
    <IndexCUsApart :content="dataWhatSetsUsApart?.data" />
    <IndexСForgingStrategic :content="dataForgingStrategic?.data" />
    <IndexСStudentsThink :content="dataDiscoverStudentThink?.data" />
    <IndexCNewsArticles :news="dataNews" />
    <!-- <IndexCAbout :mainContent="mainContent" :mainAbout="mainAbout" /> -->
  </div>
</template>

<style lang="scss"></style>
