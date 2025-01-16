<script setup>
const props = defineProps({
  content: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <div
    class="students-think py-[100px] 768:pt-10"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div class="site-container relative">
      <div
        class="text-center text-5xl font-medium mb-4 1024:text-4xl 480:!text-3xl"
      >
        {{ content?.title }}
      </div>
      <div class="text-center text-lg text-[#424343] mb-14 768:mb-8">
        {{ content?.description }}
      </div>
      <div>
        <Swiper
          :modules="[
            SwiperAutoplay,
            SwiperEffectCreative,
            SwiperNavigation,
            SwiperPagination,
          ]"
          :loop="false"
          :spaceBetween="40"
          :autoplay="{
            delay: 4000,
            disableOnInteraction: true,
          }"
          :navigation="{
            nextEl: '.swiper-button-next-studentsThink',
            prevEl: '.swiper-button-prev-studentsThink',
          }"
          :breakpoints="{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
          }"
        >
          <SwiperSlide v-for="(slider, index) in content?.blocks" :key="index">
            <div class="p-12 text-white bg-[#192B69] 768:p-5">
              <div class="mb-12">
                {{ slider.description }}
              </div>
              <div class="flex-center">
                <div class="min-w-[60px] h-[60px] mr-4">
                  <img
                    src="https://framerusercontent.com/images/frW4A4V1f3izRg6buvTpBwo8XCI.jpg?scale-down-to=512"
                    alt=""
                    class="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <div class="text-2xl font-medium 768:text-lg">
                    {{ slider.title }}
                  </div>
                  <div class="text-[#648AC8]">BA in Finance and Accounting</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="swiper-buttons">
          <div
            class="swiper-button-prev swiper-button-prev-studentsThink"
          ></div>
          <div
            class="swiper-button-next swiper-button-next-studentsThink"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.students-think {
  .swiper-buttons {
    position: absolute;
    bottom: -80px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    height: 40px;
    gap: 16px;
    left: 0;

    .swiper-button-prev-studentsThink {
      background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' rx='2' fill='%23648AC8'/%3E%3Cpath d='M28 20L12 20M12 20L18 26M12 20L18 14' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
    }

    .swiper-button-next-studentsThink {
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
