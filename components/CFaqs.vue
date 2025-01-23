<script setup>
import { ref } from "vue";
import { useAsyncData } from "nuxt/app";

const getFaqs = useApiFaqs();
const isLoading = ref(false);

const { data: dataFaqs } = useAsyncData("Faqs", async () => {
  isLoading.value = true; // Включаем лоадер
  try {
    return await getFaqs.getFaqs();
  } finally {
    isLoading.value = false; // Выключаем лоадер
  }
});

const activeIndex = ref(null);

const toggleAccordion = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
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
          class="mb-6 shadow-[0_7px_20px_0_rgba(0,0,0,0.05)] px-5 py-4 768:px-4"
          :class="activeIndex === index ? 'bg-[#192B69] text-white' : ''"
        >
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
            <span>
              {{ item.question }}
            </span>
          </div>
          <div
            v-if="activeIndex === index"
            class="mt-3 pl-10 text-lg"
            v-html="item.answer"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
