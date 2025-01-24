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
    <div class="site-container">
      <div class="flex gap-14 py-[100px] 768:flex-col 768:py-[60px]">
        <div class="w-1/2 768:w-full">
          <img :src="content.image" :alt="content.title" class="mx-auto" />
        </div>
        <div class="w-1/2 768:w-full">
          <div class="text-5xl font-medium mb-8 768:text-2xl 768:mb-6">
            {{ content.title }}
          </div>
          <div v-html="content.description"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
