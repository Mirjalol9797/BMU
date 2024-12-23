<script setup>
import { useAsyncData } from "nuxt/app";
const { t } = useI18n();

useSeoMeta({
  title: t("static_seo.title"),
  description: t("static_seo.description"),
  keywords: "BMU",
  ogTitle: t("static_seo.title"),
  ogDescription: t("static_seo.description"),
  ogImage: "/images/logo.png",
  ogUrl: "https://bmu-edu.uz/ru/",
  twitterCard: "summary_large_image",
  ogSiteName: "site_name",
  twitterUrl: "https://bmu-edu.uz/ru/",
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

const { data: dataWelcomeInfo } = useAsyncData("WelcomeInfo", () =>
  getMainPagesData.getWelcomeInfo()
);
</script>

<template>
  <div class="main-page">
    <IndexCSlider :sliderData="dataSlider?.data?.sliders" />
    <!-- <IndexCCounts /> -->
    <IndexCWelcome :mainContent="dataWelcomeInfo?.data?.main_page_header" />
    <IndexCPartnerUniversities />
    <IndexCAcademicPrograms />
    <IndexCUsApart />
    <IndexСForgingStrategic />
    <IndexСStudentsThink />
    <IndexCNewsArticles />
    <!-- <IndexCAbout :mainContent="mainContent" :mainAbout="mainAbout" /> -->
  </div>
</template>

<style lang="scss"></style>
