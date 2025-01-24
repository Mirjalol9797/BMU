<script setup>
import { useAsyncData } from "nuxt/app";
import { useRoute } from "vue-router";

const route = useRoute();
const isLoading = ref(false);
const getMember = useApiMembers();
const { t } = useI18n();

// fetch api
// const { data: dataMember } = useAsyncData("Member", () =>
//   getMember.getMemberId(route.params.slug)
// );

const { data: dataMember } = useAsyncData("Member", async () => {
  isLoading.value = true; // Включаем лоадер
  try {
    return await getMember.getMemberId(route.params.slug);
  } finally {
    isLoading.value = false; // Выключаем лоадер
  }
});

useSeoMeta({
  title: t("distinguished_faculty_members"),
  description: t("distinguished_faculty_members"),
  keywords: "BMU",
  ogTitle: t("distinguished_faculty_members"),
  ogDescription: t("distinguished_faculty_members"),
  ogImage: "/images/logo.png",
  ogUrl: "https://bmu-edu.uz/member",
  twitterCard: "summary_large_image",
  ogSiteName: "site_name",
  twitterUrl: "https://bmu-edu.uz/member",
  twitterTitle: t("distinguished_faculty_members"),
  twitterDescription: t("distinguished_faculty_members"),
  twitterImage: "/images/logo.png",
});
</script>
<template>
  <CBannerAllPage
    :title="$t('distinguished_faculty_members')"
    :image="dataMember?.background"
  />
  <div class="teacher-page py-[100px] 768:py-[70px]">
    <div class="site-container">
      <div class="grid grid-cols-2 gap-x-10 mb-14 768:grid-cols-1 768:mb-6">
        <div
          class="text-[#192B69] text-5xl font-medium 768:mb-10 768:text-3xl 480:!text-xl 480:!mb-6"
        >
          {{ dataMember?.full_name }}
        </div>
        <div>
          <div
            class="text-2xl font-medium mb-3 768:text-lg"
            v-html="dataMember?.position"
          ></div>
          <div class="mb-3" v-html="dataMember?.education"></div>
          <!-- <a href="mailto:marvin@gmail.com" class="text-[#648AC8]"
            >Mail: marvin@gmail.com</a
          > -->
        </div>
      </div>
      <div class="flex items-start gap-10 768:flex-col">
        <div class="w-full min-w-[25%]">
          <img
            :src="dataMember?.image"
            :alt="dataMember?.title"
            :title="dataMember?.title"
            class="w-full h-full object-cover"
          />
        </div>
        <div v-html="dataMember?.biography"></div>
      </div>
    </div>
  </div>

  <UiTmLoader v-if="isLoading" />
</template>
<style lang="scss"></style>
