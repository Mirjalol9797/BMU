<script setup>
import { ref } from "vue";

const { t } = useI18n();
const { $axiosPlugin } = useNuxtApp();

const content = ref(null);
const settingsStore = useSettingsStore();

async function getAbout() {
  settingsStore.isLoader = true;

  const res = await $axiosPlugin.get(`/api/undergraduate-programmes`);

  if (res.data.success) {
    content.value = res.data.data;
  }

  settingsStore.isLoader = false;
}
await getAbout();

const openAccordion = ref({ parentIndex: null, childIndex: null });

const toggleAccordion = (parentIndex, childIndex) => {
  if (
    openAccordion.value.parentIndex === parentIndex &&
    openAccordion.value.childIndex === childIndex
  ) {
    openAccordion.value = { parentIndex: null, childIndex: null };
  } else {
    openAccordion.value = { parentIndex, childIndex };
  }
};

const isAccordionOpen = (parentIndex, childIndex) => {
  return (
    openAccordion.value.parentIndex === parentIndex &&
    openAccordion.value.childIndex === childIndex
  );
};
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
  <div class="undergraduate-programmes">
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
          {{ $t("undergraduate_programmes") }}
        </div>
      </div>
    </div>
    <div class="site-container">
      <div v-for="(item, index) in content.data" :key="index" class="mb-10">
        <div class="font-semibold mb-4 text-lg">
          {{ item.title }}
        </div>
        <div
          v-for="(accardion, idx) in item?.accordion_data"
          :key="idx"
          class="accordion-item"
        >
          <div
            @click="toggleAccordion(index, idx)"
            class="accordion-title"
            :class="isAccordionOpen(index, idx) ? 'open' : ''"
          >
            {{ accardion.title }}
          </div>
          <div v-if="isAccordionOpen(index, idx)" class="accordion-content">
            {{ accardion.short_description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.undergraduate-programmes {
  .accordion-item {
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 20px;
  }

  .accordion-title {
    padding: 10px 10px 10px 32px;
    color: #1c335f;
    cursor: pointer;
    position: relative;
    font-weight: 600;
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      background-image: url(/icons/accardion-plus.svg);
      width: 16px;
      height: 16px;
      transform: translateY(-50%);
      background-size: contain;
    }
    &.open {
      &:after {
        background-image: url(/icons/accardion-minus.svg);
      }
    }
  }

  .accordion-content {
    padding: 10px;
    border-top: 1px solid #ccc;
    line-height: 24px;
  }
}
</style>
