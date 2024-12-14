<script setup>
const props = defineProps({
  mainContent: {
    type: Object,
    default: {},
  },
  mainAbout: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <section class="py-[80px] about 768:py-14">
    <div class="site-container flex items-center 768:flex-col-reverse">
      <div class="max-w-[725px] w-full mr-[80px] 768:max-w-full 768:mr-0">
        <div
          class="mb-7 768:pl-6 last:mb-0"
          v-for="(about, index) in mainAbout"
          :key="index"
        >
          <h2 class="text-xl font-bold mb-2.5 relative">{{ about.title }}</h2>
          <div class="leading-7">
            {{ about.description }}
          </div>
        </div>
      </div>
      <div class="relative w-[400px] 768:mb-14 480:w-full">
        <img :src="mainContent?.image" :alt="mainContent?.img_title" />
        <div
          class="absolute bottom-10 left-0 text-3xl px-4 text-white font-bold 640:text-xl 640:left-2"
        >
          {{ mainContent?.img_title }}
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.about {
  h2 {
    &:after {
      content: "";
      position: absolute;
      top: 1px;
      left: -24px;
      width: 24px;
      height: 24px;
      background-image: url(/icons/right-red.svg);
    }
  }
}
</style>
