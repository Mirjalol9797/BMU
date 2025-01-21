<script setup>
const props = defineProps({
  sliderData: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <Swiper
    :modules="[
      SwiperAutoplay,
      SwiperEffectCreative,
      SwiperNavigation,
      SwiperPagination,
    ]"
    :slides-per-view="1"
    :loop="true"
    :autoplay="{
      delay: 4000,
      disableOnInteraction: true,
    }"
    :navigation="true"
    :pagination="true"
    class="banner-swiper"
  >
    <SwiperSlide
      class="relative after:content-[''] after:inset-0 after:bg-[rgba(0,0,0,0.5)] after:absolute"
      v-for="(slider, index) in sliderData"
      :key="index"
    >
      <img
        :src="slider.image_url"
        :alt="slider.title"
        v-if="slider.image_url"
      />
      <video muted autoplay loop v-else>
        <source :src="slider.background_url" type="video/mp4" />
      </video>

      <div
        class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 w-[70%] text-center"
      >
        <div
          class="text-6xl leading-[80px] mb-6 font-medium 1024:text-4xl 480:!text-2xl"
        >
          {{ slider.title }}
        </div>
        <div class="text-xl leading-10 font-bold mb-10 640:text-base">
          {{ slider.description }}
        </div>
        <nuxt-link
          :to="localePath(`${slider.url}`)"
          v-if="slider.url"
          class="text-base text-white py-[14px] px-10 bg-[#648AC8] rounded-full font-medium"
        >
          {{ $t("read_more") }}
        </nuxt-link>
      </div>
    </SwiperSlide>
  </Swiper>
</template>
<style lang="scss">
.main-page {
  .banner-swiper {
    height: calc(100vh - 140px);

    .swiper-button-prev,
    .swiper-button-next {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      background-image: url("/icons/slider-left.svg");
      background-position: center;
      background-repeat: no-repeat;
      left: 20px;

      &:hover {
        background-color: rgba(255, 255, 255, 0.6);
      }
      &:after {
        content: "";
        z-index: 100;
      }

      @media (max-width: 640px) {
        display: none;
      }
    }
    .swiper-button-next {
      transform: rotate(180deg);
      right: 20px;
      left: auto;
    }
    .swiper-pagination-bullet {
      background-color: rgba(255, 255, 255, 0.7);
    }
    .swiper-pagination-bullet-active {
      background-color: rgba(255, 255, 255, 1);
    }
    video {
      width: 100%;
    }
    .swiper-slide {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
      }
    }
  }
}

@media (max-width: 1024px) {
  .main-page {
    .banner-swiper {
      height: 480px;
      video {
        min-width: 100%;
        min-height: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.6;
        max-width: none;
        width: auto;
      }
    }
  }
}
</style>
