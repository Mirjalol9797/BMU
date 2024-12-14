<script setup>
const props = defineProps({
  mainContent: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <section class="bg-[#F8F8F8] pt-[60px] pb-[68px] 768:py-12">
    <div class="site-container text-center">
      <h1 class="mb-6 text-4xl font-bold 768:text-2xl">
        {{ mainContent?.title }}
      </h1>
      <div
        class="text-lg leading-9 max-w-[1072px] mx-auto 768:text-base 768:leading-8"
      >
        {{ mainContent?.description }}
      </div>
    </div>
  </section>
</template>
<style lang="scss"></style>
