<script setup>
import { useAsyncData } from "nuxt/app";

const isLoading = ref(false);
const getMembers = useApiMembers();
const { t } = useI18n();

// fetch api
// const { data: dataFacultyMembers } = useAsyncData("FacultyMembers", () =>
//   getMembers.getFacultyMembers()
// );

const { data: dataFacultyMembers } = useAsyncData(
  "FacultyMembers",
  async () => {
    isLoading.value = true; // Включаем лоадер
    try {
      return await getMembers.getFacultyMembers();
    } finally {
      isLoading.value = false; // Выключаем лоадер
    }
  }
);

useSeoMeta({
  title: t("faculty_members"),
  description: t("faculty_members"),
  keywords: "BMU",
  ogTitle: t("faculty_members"),
  ogDescription: t("faculty_members"),
  ogImage: dataFacultyMembers?.background?.image,
  ogUrl: "https://bmu-edu.uz/news",
  twitterCard: "summary_large_image",
  ogSiteName: "site_name",
  twitterUrl: "https://bmu-edu.uz/news",
  twitterTitle: t("faculty_members"),
  twitterDescription: t("faculty_members"),
  twitterImage: dataFacultyMembers?.background?.image,
});
</script>
<template>
  <CBannerAllPage
    :title="$t('faculty_members')"
    :image="dataFacultyMembers?.background?.image"
  />
  <div class="members-page py-[100px] 768:py-[70px]">
    <div class="site-container">
      <div class="grid grid-cols-3 gap-6 768:grid-cols-2 480:!grid-cols-1">
        <nuxt-link
          :to="localePath(`/member/${item.id}`)"
          v-for="item in dataFacultyMembers?.users"
          :key="item"
          class="members-page__item mb-6"
        >
          <div class="mb-4 overflow-hidden h-[460px]">
            <img
              :src="item.image"
              :alt="item.full_name"
              :title="item.full_name"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="text-2xl font-medium mb-1">{{ item.full_name }}</div>
          <div class="text-[#424343]" v-html="item.position"></div>
        </nuxt-link>
      </div>
    </div>
  </div>

  <UiTmLoader v-if="isLoading" />
</template>
<style lang="scss" scoped>
.members-page {
  &__item {
    img {
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      img {
        transition: all 0.3s ease-in-out;
        transform: scale(1.1);
      }
    }
  }
}
</style>
