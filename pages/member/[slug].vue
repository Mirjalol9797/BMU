<script setup>
import { onMounted, watch } from "vue";
import { useAsyncData } from "nuxt/app";
import { useRoute } from "vue-router";

const route = useRoute();
const isLoading = ref(false);
const getMember = useApiMembers();
let mainTitle = null;
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

watch(
  () => dataMember.value,
  (newValue) => {
    if (newValue) {
      mainTitle =
        newValue.department == 1
          ? t("academic_advisory_board")
          : newValue.department == 2
          ? t("faculty_members")
          : t("leadership_team");
    }
  },
  { immediate: true }
);

useSeoMeta({
  title: dataMember?.value?.full_name,
  description: dataMember?.value?.position,
  keywords: "BMU",
  ogTitle: dataMember?.value?.full_name,
  ogDescription: dataMember?.value?.position,
  ogImage: "/images/logo.png",
  ogUrl: "https://bmu-edu.uz/member",
  twitterCard: "summary_large_image",
  ogSiteName: "site_name",
  twitterUrl: "https://bmu-edu.uz/member",
  twitterTitle: dataMember?.value?.full_name,
  twitterDescription: dataMember?.value?.position,
  twitterImage: "/images/logo.png",
});
</script>
<template>
  <CBannerAllPage :title="mainTitle" :image="dataMember?.background" />
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
