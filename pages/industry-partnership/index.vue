<script setup>
import { ref } from "vue";

const { t } = useI18n();
const { $axiosPlugin } = useNuxtApp();

const content = ref(null);
const settingsStore = useSettingsStore();

async function getAbout() {
  settingsStore.isLoader = true;

  const res = await $axiosPlugin.get(`/api/industry-partnerships`);

  if (res.data.success) {
    content.value = res.data.data;
    console.log(content.value);
  }

  settingsStore.isLoader = false;
}
await getAbout();

const openAccordionIndex = ref(null);
const toggle = (index) => {
  if (openAccordionIndex.value === index) {
    openAccordionIndex.value = null; // Закрытие текущего блока
  } else {
    openAccordionIndex.value = index; // Открытие выбранного блока
  }
};

useSeoMeta({
  title: content?.value.data.title,
  description: t("static_seo.description"),
  keywords: "BMU",
  ogTitle: content?.value.data.title,
  ogDescription: t("static_seo.description"),
  ogImage: "/images/logo.png",
  ogUrl: "https://bmu-edu.uz/ru/",
  twitterCard: "summary_large_image",
  ogSiteName: "site_name",
  twitterUrl: "https://bmu-edu.uz/ru/",
  twitterTitle: content?.value.data.title,
  twitterDescription: t("static_seo.description"),
  twitterImage: "/images/logo.png",
});
</script>
<template>
  <div class="industry-partnership">
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
          {{ content?.data.title }}
        </div>
      </div>
    </div>
    <div class="site-container">
      <div class="flex pb-10">
        <div class="w-[52%] mr-[3%]">
          <img :src="content?.data.image" :alt="content?.data.title" />
        </div>
        <div class="w-[45%]">
          <div v-html="content?.data.description" class="mb-6"></div>
          <div>
            <div
              v-for="(item, index) in content?.data.accordion_data"
              :key="index"
              class="accordion-item"
            >
              <div
                @click="toggle(index)"
                class="accordion-title"
                :class="openAccordionIndex === index ? 'open' : ''"
              >
                {{ item.title }}
              </div>
              <div
                v-if="openAccordionIndex === index"
                class="accordion-content"
              >
                {{ item.short_description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.industry-partnership {
  .accordion-item {
    margin-bottom: 16px;
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
