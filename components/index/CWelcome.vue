<script setup>
const props = defineProps({
  content: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <section class="pt-[86px] pb-[130px] 1024:py-12" data-aos="fade-up">
    <div class="site-container flex gap-10 1024:flex-col 1024:gap-0">
      <h1
        class="w-1/2 text-5xl leading-[60px] font-medium 1024:w-full 1024:text-4xl 1024:mb-7 480:!text-3xl"
      >
        {{ content?.title }}
      </h1>
      <div
        class="w-1/2 leading-9 max-w-[1072px] mx-auto 1024:w-full 768:leading-7"
      >
        <div v-html="content?.description"></div>

        <nuxt-link
          :to="localePath(`${content.link}`)"
          class="text-[#648AC8] py-3 px-6 border border-[#648AC8] rounded-full mt-5 inline-flex items-center learn-more"
        >
          {{ $t("learn_more") }}
          <img
            src="/icons/blue-arrow.svg"
            alt="blue-arrow"
            class="ml-4 transform transition-transform duration-2000"
          />
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
<style lang="scss"></style>
