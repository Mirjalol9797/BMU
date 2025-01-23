<script setup>
const props = defineProps({
  content: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <div class="template">
    <CBannerAllPage :title="content.title" :image="content.background" />

    <div class="site-container !py-[80px] 768:!py-[40px]">
      <div v-html="content?.description"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
