<script setup>
import { ref, nextTick } from "vue";
import { useAsyncData } from "nuxt/app";

const getFaqs = useApiFaqs();
const isLoading = ref(false);

const { data: dataFaqs } = useAsyncData("Faqs", async () => {
  isLoading.value = true;
  try {
    return await getFaqs.getFaqs();
  } finally {
    isLoading.value = false;
  }
});

const activeIndex = ref(null);
const accordionRefs = ref([]);
const accordionHeights = ref([]);

const toggleAccordion = async (index) => {
  if (activeIndex.value === index) {
    activeIndex.value = null;
  } else {
    activeIndex.value = index;

    // Ждем рендер контента перед измерением высоты
    await nextTick();

    // Получаем высоту раскрытого контента
    if (accordionRefs.value[index]) {
      accordionHeights.value[index] = accordionRefs.value[index].scrollHeight;
    }
  }
};
</script>

<template>
  <div class="c-faqs my-14">
    <div class="site-container">
      <div
        class="text-center text-4xl font-medium mb-6 1024:text-3xl 768:mb-4 768:!text-2xl"
      >
        FAQs
      </div>

      <div class="max-w-[850px] w-full mx-auto">
        <div
          v-for="(item, index) in dataFaqs?.data?.faqs"
          :key="index"
          class="mb-6 shadow-[0_7px_20px_0_rgba(0,0,0,0.05)] px-5 py-4 768:px-4 transition-all duration-300"
          :class="activeIndex === index ? 'bg-[#192B69] text-white' : ''"
        >
          <!-- Заголовок -->
          <div
            class="text-xl font-medium flex-center cursor-pointer 768:text-lg"
            @click="toggleAccordion(index)"
          >
            <img
              :src="
                activeIndex === index
                  ? '/icons/accordion-minus.svg'
                  : '/icons/accordion-plus.svg'
              "
              alt="toggle-icon"
              class="mr-4"
            />
            <span>{{ item.question }}</span>
          </div>

          <!-- Контент с анимацией -->
          <div
            ref="accordionRefs"
            class="accordion-content pt-2"
            :style="{
              maxHeight:
                activeIndex === index ? accordionHeights[index] + 'px' : '0px',
              opacity: activeIndex === index ? '1' : '0',
            }"
            v-html="item.answer"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.accordion-content {
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: max-height 0.4s ease-in-out, opacity 0.3s ease-in-out;
}
</style>
