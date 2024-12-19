<script setup></script>
<template>
  <div class="py-[130px] academic-programs 768:py-10">
    <div class="site-container">
      <div
        class="text-center text-5xl font-medium mb-4 1024:text-4xl 480:!text-3xl"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Our Academic Programs
      </div>
      <div
        class="text-center text-lg text-[#424343] mb-14 768:mb-8"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Gain valuable insights from their experiences and see the impact of our
        programs through their stories.
      </div>
      <div
        class="grid grid-cols-2 gap-14 1024:gap-8 640:grid-cols-1"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div
          v-for="item in 4"
          :key="item"
          class="relative academic-programs__item"
        >
          <div class="h-[580px] w-full academic-programs__img 768:h-[380px]">
            <img
              src="https://www.insidehighered.com/sites/default/files/2024-02/GettyImages-1072191138.jpg"
              alt=""
              class="h-full w-full object-cover"
            />
          </div>
          <div
            class="absolute bottom-0 left-0 p-8 pb-10 z-10 text-white w-full academic-programs__text 768:px-4"
          >
            <div class="text-4xl font-medium mb-4 768:text-xl">
              Undegraduate Program
            </div>
            <div class="content">
              <div class="text-[#CFCFCF] mb-6">
                Explore diverse degrees to ignite your potential and shape your
                future.
              </div>
              <nuxt-link
                to="/"
                class="font-medium inline-flex py-3 px-6 rounded-full border border-[#fff] learn-more"
              >
                Get started
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
