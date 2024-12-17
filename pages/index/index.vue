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

//

import { ref } from "vue";

const settingsStore = useSettingsStore();

const sliderData = ref(null);
const mainContent = ref(null);
const mainAbout = ref(null);
const { $axiosPlugin } = useNuxtApp();

async function getSlider() {
  settingsStore.isLoader = true;

  await $axiosPlugin
    .get("/api/slider")
    .then((res) => {
      if (res.data.success) {
        sliderData.value = res.data.data.sliders;
      }
    })
    .catch((error) => console.log(error));

  settingsStore.isLoader = false;
}

async function getMainContent() {
  settingsStore.isLoader = true;

  await $axiosPlugin
    .get("/api/main_page_header")
    .then((res) => {
      if (res.data.success) {
        mainContent.value = res.data.data.main_page_header;
      }
    })
    .catch((error) => console.log(error));

  settingsStore.isLoader = false;
}

async function getMainAbout() {
  settingsStore.isLoader = true;

  await $axiosPlugin
    .get("/api/main_page_body")
    .then((res) => {
      if (res.data.success) {
        mainAbout.value = res.data.data.main_page_body;
      }
    })
    .catch((error) => console.log(error));

  settingsStore.isLoader = false;
}

getSlider();
getMainContent();
getMainAbout();
</script>

<template>
  <div class="main-page">
    <IndexCSlider :sliderData="sliderData" />
    <!-- <IndexCCounts /> -->
    <IndexCWelcome :mainContent="mainContent" />
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
