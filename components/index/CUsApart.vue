<script setup></script>

<template>
  <div class="site-container">
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
      :navigation="true"
    >
      <SwiperSlide v-for="(slider, index) in 6" :key="index">
        <img
          src="https://framerusercontent.com/images/tEX90ibE91PUFiyiQVNjfmk.jpg?scale-down-to=1024"
          alt=""
        />
        <div>Personalized Academic Support</div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="scss" scoped></style>
