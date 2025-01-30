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
    <div class="site-container !py-[80px] 768:!py-[40px]">
      <div class="gap-10 mb-[80px] 768:mb-10">
        <div v-html="content.description"></div>
      </div>
      <div class="grid grid-cols-3 gap-6 768:grid-cols-2 480:!grid-cols-1">
        <nuxt-link
          v-for="(item, index) in content.accordion_data"
          :key="index"
          :to="localePath(`${item.url}`)"
          class="bg-white img-transition"
        >
          <div class="h-[300px] overflow-hidden 768:h-[200px]">
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="shadow-[0_7px_28px_0_rgba(0,0,0,0.06)] p-5">
            <div
              class="text-xl text-[#010101] mb-5 font-medium min-h-[56px] 768:text-base"
            >
              {{ item.title }}
            </div>
            <div
              v-html="item.description"
              class="text-[#424343] text-height6"
            ></div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
