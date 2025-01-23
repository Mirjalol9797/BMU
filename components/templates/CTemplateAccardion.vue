<script setup>
import { ref } from "vue";

const props = defineProps({
  content: {
    type: Object,
    default: {},
  },
});

const activeIndex = ref(null);

const toggleAccordion = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <div class="template">
    <CBannerAllPage :title="content.title" :image="content.background" />

    <div class="site-container !py-[80px] 768:!py-[40px]">
      <div
        v-html="content?.description"
        class="mb-10"
        v-if="content?.description"
      ></div>
      <div class="w-full mx-auto" v-if="content?.accordion_data">
        <div
          v-for="(item, index) in content?.accordion_data"
          :key="index"
          class="mb-6 text-[#192B69]"
        >
          <div
            class="text-xl font-medium flex-center justify-between cursor-pointer px-5 py-4 bg-[#F4F5F8]"
            @click="toggleAccordion(index)"
          >
            <span class="mr-4">
              {{ item.title }}
            </span>
            <img
              :src="
                activeIndex === index
                  ? '/icons/accordion-minus2.svg'
                  : '/icons/accordion-plus2.svg'
              "
              alt="toggle-icon"
            />
          </div>
          <div
            v-if="activeIndex === index"
            class="mt-3 text-lg"
            v-html="item.description"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
