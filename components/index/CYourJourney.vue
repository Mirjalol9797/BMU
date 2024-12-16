<script setup>
import { ref, onMounted } from "vue";

// Список изображений
const images = [
  "https://framerusercontent.com/images/1dFgOco0vEkohZjPN5SBrvSwh4.png",
  "https://framerusercontent.com/images/KVIKHL1OStxBGafOmPo75bmAqU.png",
  "https://framerusercontent.com/images/NcrD2mctc6prY0BGOG2NvXolE0.png",
  // "https://framerusercontent.com/images/1dFgOco0vEkohZjPN5SBrvSwh4.png",
  // "https://framerusercontent.com/images/1dFgOco0vEkohZjPN5SBrvSwh4.png",
];

const sliderTrack = ref(null);
const sliderTrack2 = ref(null);
const offset = ref(0);
const offset2 = ref(-1000);
const loopedImages = [...images, ...images]; // Дублируем изображения для бесконечной прокрутки

const speed = 200; // Скорость прокрутки (мс на шаг)
const step = 1; // Шаг смещения в пикселях

const animateSlider = () => {
  offset.value += step;

  // Если прокрутка дошла до половины трека (один набор картинок), сбрасываем
  if (offset.value >= sliderTrack.value.scrollHeight / 2) {
    offset.value = 0;
  }

  setTimeout(() => {
    requestAnimationFrame(animateSlider);
  }, 1000 / speed); // Чем меньше speed, тем быстрее прокрутка
};

const animateSlider2 = () => {
  offset2.value += step;

  // Если прокрутка дошла до половины трека (один набор картинок), сбрасываем
  if (offset2.value >= sliderTrack2.value.scrollHeight / 2) {
    offset2.value = 0;
  }

  setTimeout(() => {
    requestAnimationFrame(animateSlider2);
  }, 1000 / speed); // Чем меньше speed, тем быстрее прокрутка
};

onMounted(() => {
  animateSlider();
  animateSlider2();
});
</script>

<template>
  <div
    class="bg-[#192B69] py-[120px] 768:py-[100px] relative overflow-hidden"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div class="site-container flex">
      <div class="max-w-[500px] w-full text-white">
        <div class="text-5xl mb-5 font-medium">Embark on Your Journey</div>
        <div class="mb-8">
          Join EduVerse and explore a world of academic excellence, personal
          growth, and boundless possibilities.
        </div>
        <button
          class="text-white font-medium bg-[#648AC8] py-3 px-6 rounded-full"
        >
          Apply Online
        </button>
      </div>
      <div class="absolute top-0 right-[30%] flex gap-8 rotate-[12deg]">
        <div class="animate-images-up">
          <div
            class="slider-track"
            :style="{ transform: `translateY(-${offset}px)` }"
            ref="sliderTrack"
          >
            <img
              v-for="(image, index) in loopedImages"
              :key="index"
              :src="image"
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
              v-for="(image, index) in loopedImages"
              :key="index"
              :src="image"
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
