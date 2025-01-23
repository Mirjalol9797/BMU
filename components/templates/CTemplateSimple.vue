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

    <div
      class="site-container !py-[100px] grid grid-cols-2 gap-14 768:grid-cols-1 768:gap-6 768:!py-[70px]"
    >
      <div>
        <div class="text-5xl font-medium mb-4 1024:text-4xl 480:!text-3xl">
          {{ content.title }}
        </div>
        <div v-html="content.description"></div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
