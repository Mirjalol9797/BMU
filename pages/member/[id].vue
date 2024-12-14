<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const { t } = useI18n();
const { $axiosPlugin } = useNuxtApp();

const content = ref(null);
const settingsStore = useSettingsStore();

async function getAbout() {
  settingsStore.isLoader = true;

  const res = await $axiosPlugin.get(`/api/member/${route.params.id}`);

  if (res.data.success) {
    content.value = res.data.data;
  }

  settingsStore.isLoader = false;
}
await getAbout();

useSeoMeta({
  title: content?.value?.full_name,
  description: t("static_seo.description"),
  keywords: "BMU",
  ogTitle: content?.value?.full_name,
  ogDescription: t("static_seo.description"),
  ogImage: "/images/logo.png",
  ogUrl: "https://bmu-edu.uz/ru/",
  twitterCard: "summary_large_image",
  ogSiteName: "site_name",
  twitterUrl: "https://bmu-edu.uz/ru/",
  twitterTitle: content?.value?.full_name,
  twitterDescription: t("static_seo.description"),
  twitterImage: "/images/logo.png",
});
</script>

<template>
  <div
    class="h-[180px] overflow-hidden relative text-white before:content-[''] before:inset-0 before:bg-[rgba(0,0,0,0.7)] before:absolute before:z-10 mb-16 1024:h-[160px]"
  >
    <img
      :src="content?.background ? content?.background : '/images/page-fon.jpg'"
      :alt="content?.full_name"
      class="w-full relative z-0 top-[-50%]"
    />
    <div class="absolute z-10 bottom-0 w-full">
      <div
        class="site-container text-4xl font-bold !mb-14 768:text-2xl 768:!mb-10"
      >
        {{ content?.full_name }}
      </div>
    </div>
  </div>
  <div class="site-container content">
    <div class="flex mb-16 768:flex-col">
      <div
        class="max-w-[400px] min-w-[400px] w-full mr-12 768:min-w-[auto] 768:max-w-[60%] 768:w-full 768:mr-auto 768:mb-10 768:mx-auto"
      >
        <img
          :src="content?.image ? content?.image : '/images/page-fon.jpg'"
          :alt="content?.title"
          class="w-full"
        />
      </div>
      <div>
        <div class="text-3xl font-bold 768:text-2xl 480:!text-xl mb-3">
          {{ content?.full_name }}, {{ content?.degree }}
        </div>
        <div
          class="mb-4 text-[#6c6c6c] mb-4 pb-2 border-b border-[#e6e6e6]"
          v-html="content?.position"
        ></div>
        <div class="mb-8 text-[#6c6c6c]" v-html="content?.education"></div>
        <div v-html="content?.biography"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
