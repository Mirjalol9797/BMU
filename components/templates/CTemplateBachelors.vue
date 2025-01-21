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
    <CBannerAllPage :title="content.title" />
    <div class="site-container !py-[80px] 768:!py-[40px]">
      <div class="grid grid-cols-2 gap-10 mb-[80px] 768:grid-cols-1 768:mb-10">
        <div>{{ content.title }}</div>
        <div v-html="content.description"></div>
      </div>
      <div class="grid grid-col-3 gap-6">
        <nuxt-link
          :to="item.url"
          v-for="(item, index) in content.accordion_data"
          :key="index"
        >
          <div class="w-[410px] h-[300px] mb-5">
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="text-xl text-[#010101] mb-5 768:text-base">
            {{ item.title }}
          </div>
          <div v-html="item.description" class="text-[#424343]"></div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
