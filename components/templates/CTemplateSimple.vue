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
    <div
      class="template-container !py-[80px] 768:!py-[40px] grid grid-cols-2 gap-14 768:grid-cols-1"
    >
      <div>
        <div class="text-5xl font-medium mb-4 1024:text-4xl 480:!text-3xl">
          {{ content.title }}
        </div>
        <div v-html="content.description"></div>
      </div>
      <div>
        <div
          v-for="(item, index) in content.accordion_data"
          :key="index"
          class="p-6 shadow-[0_7px_28.9px_0_rgba(0,0,0,0.04)] mb-6 last:mb-0"
        >
          <div class="font-medium text-2xl mb-2 768:text-lg">
            {{ item.title }}
          </div>
          <div class="text-[#424343]" v-html="item.description"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
