<script setup>
import { ref } from "vue";

const { t } = useI18n();
const { $axiosPlugin } = useNuxtApp();

const content = ref(null);
const settingsStore = useSettingsStore();

async function getAbout() {
  settingsStore.isLoader = true;

  const res = await $axiosPlugin.get(`/api/faculty-members`);

  if (res.data.success) {
    content.value = res.data.data;
  }

  settingsStore.isLoader = false;
}
await getAbout();

useSeoMeta({
  title: t("faculty_members"),
  description: t("static_seo.description"),
  keywords: "BMU",
  ogTitle: t("faculty_members"),
  ogDescription: t("static_seo.description"),
  ogImage: "/images/logo.png",
  ogUrl: "https://bmu-edu.uz/ru/",
  twitterCard: "summary_large_image",
  ogSiteName: "site_name",
  twitterUrl: "https://bmu-edu.uz/ru/",
  twitterTitle: t("faculty_members"),
  twitterDescription: t("static_seo.description"),
  twitterImage: "/images/logo.png",
});
</script>

<template>
  <div
    class="h-[180px] overflow-hidden relative text-white before:content-[''] before:inset-0 before:bg-[rgba(0,0,0,0.7)] before:absolute before:z-10 mb-16 1024:h-[160px]"
  >
    <img
      :src="
        content?.background?.image
          ? content?.background?.image
          : '/images/page-fon.jpg'
      "
      alt="title"
      class="w-full relative z-0 top-[-50%]"
    />
    <div class="absolute z-10 bottom-0 w-full">
      <div
        class="site-container text-4xl font-bold !mb-14 768:text-2xl 768:!mb-10"
      >
        {{ $t("faculty_members") }}
      </div>
    </div>
  </div>

  <div class="site-container content">
    <div class="grid grid-cols-2 gap-16 mb-16 768:grid-cols-1 768:gap-8">
      <nuxt-link
        class="flex border border-[#e6e6e6] pr-2"
        v-for="(item, index) in content.users"
        :key="index"
        :to="localePath(`/member/${item.id}`)"
      >
        <div class="mr-6 overflow-hidden max-w-[200px] w-full">
          <img
            :src="item.image"
            :alt="item.full_name"
            class="hover:scale-[1.1] duration-300 w-full h-full object-cover"
          />
        </div>
        <div class="pt-6">
          <div class="text-2xl font-bold text-[#1C335F] mb-2">
            {{ item.full_name }}, {{ item.degree }}
          </div>
          <div
            class="text-sm text-[#6b6b6b] mb-4 pb-2 border-b border-[#e6e6e6]"
            v-html="item.position"
          ></div>
          <div class="text-sm text-[#6b6b6b]" v-html="item.education"></div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss">
.content {
  p {
    font-size: 14px;
    margin-bottom: 8px;
  }
}
</style>
