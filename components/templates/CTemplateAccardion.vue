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
    <CBannerAllPage :title="content.title" />

    <div class="site-container !py-[80px] 768:!py-[40px]">
      <div v-html="content?.description" class="mb-10"></div>
      <div></div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
