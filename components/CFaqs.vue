<script setup>
import { ref } from "vue";

const activeIndex = ref(null);

const toggleAccordion = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>
<template>
  <div class="c-faqs">
    <div class="site-container">
      <div
        class="text-center text-5xl font-medium mb-6 1024:text-4xl 768:mb-4 768:!text-3xl"
      >
        FAQs
      </div>
      <div class="text-[#424343] mb-12 text-center">
        Step into a vibrant community where learning extends beyond the
        classroom, and inspiration is found around every corner.
      </div>
      <div class="max-w-[850px] w-full mx-auto">
        <div
          v-for="(item, index) in 4"
          :key="index"
          class="mb-6 shadow-[0_7px_20px_0_rgba(0,0,0,0.05)] px-5 py-4"
          :class="activeIndex === index ? 'bg-[#192B69] text-white' : ''"
        >
          <div
            class="text-2xl font-medium flex-center cursor-pointer"
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
              What are the admission requirements for undergraduate programs?
            </span>
          </div>
          <div v-if="activeIndex === index" class="mt-3 pl-10 text-lg">
            Applicants must have a high school diploma or equivalent, proof of
            English proficiency (e.g., IELTS/TOEFL), completed application form,
            transcripts, a personal statement, and recommendation letters. Some
            programs may require an entrance exam or interview.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
