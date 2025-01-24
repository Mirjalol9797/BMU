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
      <div class="py-[100px] 768:py-[70px]">
        <div
          class="flex-center gap-14 mb-[100px] last:mb-0 768:flex-col 768:gap-8"
          v-for="(item, index) in content?.accordion_data"
          :key="index"
          :class="index % 2 == 1 ? 'flex-row-reverse' : ''"
        >
          <div class="max-h-[640px] w-1/2 768:w-full">
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="w-1/2 768:w-full">
            <div
              class="text-5xl font-medium mb-8 1024:text-4xl 768:mb-4 768:!text-3xl"
            >
              {{ item.title }}
            </div>
            <div class="text-[#424343]" v-html="item.description"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
