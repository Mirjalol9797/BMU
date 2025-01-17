<script setup>
const props = defineProps({
  content: {
    type: Object,
    default: {},
  },
});
</script>
<template>
  <div class="py-[130px] academic-programs 768:py-10">
    <div class="site-container">
      <div
        class="text-center text-5xl font-medium mb-4 1024:text-4xl 480:!text-3xl"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {{ content?.title }}
      </div>
      <div
        class="text-center text-lg text-[#424343] mb-14 768:mb-8"
        v-html="content?.description"
        data-aos="fade-up"
        data-aos-duration="1000"
      ></div>
      <div
        class="grid grid-cols-2 gap-14 1024:gap-8 640:grid-cols-1"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div
          v-for="(item, index) in content?.blocks"
          :key="index"
          class="relative academic-programs__item"
        >
          <div class="h-[580px] w-full academic-programs__img 768:h-[380px]">
            <img
              :src="item.image"
              :alt="item.title"
              class="h-full w-full object-cover"
            />
          </div>
          <div
            class="absolute bottom-0 left-0 p-8 pb-10 z-10 text-white w-full academic-programs__text 768:px-4"
          >
            <div class="text-4xl font-medium mb-4 768:text-xl">
              {{ item.title }}
            </div>
            <div class="content">
              <div
                class="text-[#CFCFCF] mb-6 h-[48px] overflow-hidden"
                v-html="item.description"
              ></div>
              <nuxt-link
                :to="localePath(`${item.url}`)"
                class="font-medium inline-flex py-3 px-6 rounded-full border border-[#fff] learn-more"
              >
                {{ $t("get_started") }}
                <img
                  src="/icons/white-arrow.svg"
                  alt="white-arrow"
                  class="ml-4 transform transition-transform duration-2000"
                />
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.academic-programs {
  &__text {
    bottom: -100px;
    transition: all 0.3s;

    .content {
      opacity: 0;
    }
  }
  &__item {
    overflow: hidden;
    &:after {
      content: "";
      position: absolute;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.1) 0%,
        rgba(0, 0, 0, 1) 100%
      );
      inset: 0;
      z-index: 8;
    }

    &:hover {
      .academic-programs__text {
        bottom: 0;
        .content {
          opacity: 1;
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .academic-programs {
    &__text {
      .content {
        display: block;
      }
    }
  }
}
</style>
