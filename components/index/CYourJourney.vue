<script setup>
import { ref, onMounted, computed } from "vue";
import { useAsyncData } from "nuxt/app";

const settingsStore = useSettingsStore();

// Ссылки на элементы и переменные
const sliderTrack = ref(null);
const sliderTrack2 = ref(null);
const offset = ref(0);
const offset2 = ref(-1000);
const speed = 60; // Скорость прокрутки
const step = 1; // Шаг анимации

// Получение массива изображений из API
const images = computed(() => {
  const gallery = settingsStore.journeyData?.data?.gallery || [];
  return [...gallery, ...gallery]; // Дублируем изображения для бесконечной прокрутки
});

// Анимация первого слайдера
const animateSlider = () => {
  offset.value += step;

  // Сброс, если прокрутка достигла половины
  if (sliderTrack.value && offset.value >= sliderTrack.value.scrollHeight / 2) {
    offset.value = 0;
  }

  requestAnimationFrame(animateSlider);
};

// Анимация второго слайдера
const animateSlider2 = () => {
  offset2.value += step;

  // Сброс, если прокрутка достигла половины
  if (sliderTrack2.value && offset2.value >= 0) {
    offset2.value = -sliderTrack2.value.scrollHeight / 2;
  }

  requestAnimationFrame(animateSlider2);
};

// Запуск анимации после монтирования
onMounted(() => {
  animateSlider();
  animateSlider2();
});
</script>

<template>
  <div
    class="bg-[#192B69] py-[120px] 1024:pb-0 768:py-[100px] relative overflow-hidden"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div class="site-container flex 1024:flex-col">
      <div
        class="max-w-[500px] w-full text-white 1024:max-w-full 1024:text-center 1024:mb-[100px]"
      >
        <div class="text-5xl font-medium mb-5 1024:text-4xl 480:!text-3xl">
          {{ settingsStore.journeyData?.data?.journey?.title }}
        </div>
        <div class="mb-8">
          {{ settingsStore.journeyData?.data?.journey?.description }}
        </div>
        <button
          class="text-white font-medium bg-[#648AC8] py-3 px-6 rounded-full inline-flex items-center learn-more"
        >
          {{ $t("apply_now") }}
          <img
            src="/icons/white-arrow.svg"
            alt="blue-arrow"
            class="ml-4 transform transition-transform duration-2000"
          />
        </button>
      </div>
      <div
        class="absolute top-0 right-[30%] flex gap-8 rotate-[12deg] 1024:relative 1024:h-[500px] 1024:top-0 1024:right-0 1024:overflow-hidden 1024:mx-auto"
      >
        <div class="animate-images-up">
          <div
            class="slider-track"
            :style="{ transform: `translateY(-${offset}px)` }"
            ref="sliderTrack"
          >
            <img
              v-for="(item, index) in images"
              :key="item.id + '-' + index"
              :src="item.image"
              alt="slider image"
              class="slide mb-6"
            />
          </div>
        </div>
        <div class="animate-images-down">
          <div
            class="slider-track"
            :style="{ transform: `translateY(${offset2}px)` }"
            ref="sliderTrack2"
          >
            <img
              v-for="(item, index) in images"
              :key="item.id + '-' + index"
              :src="item.image"
              alt="slider image"
              class="slide mb-6"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slider-track {
  will-change: transform;
  img {
    width: 250px;
  }
}
</style>
