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

    <div class="site-container">
      <div class="py-[100px] 768:py-[60px]">
        <div
          class="flex mb-[100px] last:mb-0 1024:flex-col 768:mb-14"
          v-for="(item, index) in content?.accordion_data"
          :key="index"
        >
          <div class="w-1/2 1024:w-full">
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover"
            />
          </div>
          <div
            class="w-1/2 px-[60px] py-10 shadow-[12px_4px_32px_0_rgba(0,0,0,0.06)] 1024:w-full 640:py-6 640:px-4"
          >
            <div
              class="text-[#648AC8] text-xl mb-6 font-medium 640:text-base 640:mb-4"
            >
              Licences & Ligal Documentation
            </div>
            <div class="text-4xl mb-4 font-medium 640:text-xl">
              {{ item.title }}
            </div>
            <div class="text-[#424343]" v-html="item.description"></div>
            <a
              v-if="item.file"
              :href="item.file"
              target="_blank"
              class="flex items-center justify-between text-white bg-[#648AC8] py-3 px-5 rounded-full max-w-[180px] mt-6"
            >
              <span>{{ $t("download_file") }}</span>
              <img src="/icons/download.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
