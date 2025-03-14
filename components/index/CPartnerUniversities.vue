<script setup>
const props = defineProps({
  content: {
    type: Object,
    default: {},
  },
});
</script>
<template>
  <div class="py-[130px] bg-[#192B69] 768:py-10">
    <div class="site-container">
      <div
        class="text-center text-5xl font-medium text-white mb-4 1024:text-4xl 480:!text-3xl"
        data-aos="fade-up"
      >
        {{ content?.title }}
      </div>
      <div
        class="text-center text-lg text-[#CFCFCF] mb-14 768:mb-8"
        v-html="content?.description"
        data-aos="fade-up"
      ></div>
      <div class="grid grid-cols-2 gap-14 768:grid-cols-1" data-aos="fade-up">
        <div v-for="(item, index) in content?.blocks" :key="index">
          <div class="overflow-hidden img-transition h-[580px] w-full mb-8">
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="text-white mb-3 text-4xl font-medium 1024:text-2xl">
            {{ item.title }}
          </div>
          <div class="text-[#CFCFCF] mb-8" v-html="item.description"></div>
          <nuxt-link
            :to="localePath(`${item.url}`)"
            class="text-[#648AC8] inline-flex items-center learn-more"
            >{{ $t("learn_more") }}
            <img
              src="/icons/blue-arrow.svg"
              alt="blue-arrow"
              class="ml-4 transform transition-transform duration-2000"
            />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
