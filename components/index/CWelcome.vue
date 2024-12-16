<script setup>
const props = defineProps({
  mainContent: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <section
    class="pt-[86px] pb-[130px] 1024:py-12 animate__animated animate__bounceInUp"
  >
    <div class="site-container flex gap-10 1024:flex-col 1024:gap-0">
      <h1
        class="w-1/2 text-5xl font-bold 1024:w-full 1024:text-4xl 1024:mb-7 480:!text-3xl"
      >
        {{ mainContent?.title }}
      </h1>
      <div class="w-1/2 leading-9 max-w-[1072px] mx-auto 1024:w-full">
        <div>{{ mainContent?.description }}</div>

        <nuxt-link
          to="/"
          class="text-[#648AC8] inline-block py-3 px-6 border border-[#648AC8] rounded-full mt-5"
        >
          Learn More
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
<style lang="scss"></style>
