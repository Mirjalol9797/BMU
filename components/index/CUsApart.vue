<script setup></script>

<template>
  <div
    class="us-apart py-[100px] 768:py-10"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div class="site-container relative">
      <div class="mb-10 text-5xl font-medium 768:text-2xl">
        What Sets Us Apart
      </div>
      <Swiper
        :modules="[
          SwiperAutoplay,
          SwiperEffectCreative,
          SwiperNavigation,
          SwiperPagination,
        ]"
        :slides-per-view="4"
        :loop="false"
        :spaceBetween="30"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: true,
        }"
        :navigation="{
          nextEl: '.swiper-button-next-usapart',
          prevEl: '.swiper-button-prev-usapart',
        }"
        :breakpoints="{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          960: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }"
      >
        <SwiperSlide v-for="(slider, index) in 6" :key="index">
          <div class="h-[480px] mb-4 768:h-[320px]">
            <img
              src="https://framerusercontent.com/images/tEX90ibE91PUFiyiQVNjfmk.jpg?scale-down-to=1024"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
          <div class="text-2xl font-medium 768:text-base">
            Personalized Academic Support
          </div>
        </SwiperSlide>
      </Swiper>
      <div class="swiper-buttons">
        <div class="swiper-button-prev swiper-button-prev-usapart"></div>
        <div class="swiper-button-next swiper-button-next-usapart"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.us-apart {
  .swiper-buttons {
    position: absolute;
    right: 20px;
    top: 4px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
    height: 40px;
    gap: 16px;

    .swiper-button-prev-usapart {
      background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' rx='2' fill='%23648AC8'/%3E%3Cpath d='M28 20L12 20M12 20L18 26M12 20L18 14' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
    }

    .swiper-button-next-usapart {
      background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' rx='2' fill='%23648AC8'/%3E%3Cpath d='M28 20L12 20M12 20L18 26M12 20L18 14' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
      transform: rotate(180deg);
    }

    div {
      background-color: #648ac8;
      width: 40px;
      height: 40px;
      border-radius: 2px;

      position: relative;
      top: 0;
      left: 0;
      right: 0;
      &:after {
        content: none;
      }
    }
  }
}
</style>
