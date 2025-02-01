<script setup>
import { ref, nextTick } from "vue";

const props = defineProps({
  content: {
    type: Object,
    default: {},
  },
});

const activeIndex = ref(null);
const accordionRefs = ref([]);
const accordionHeights = ref([]);

const toggleAccordion = async (index) => {
  if (activeIndex.value === index) {
    activeIndex.value = null;
  } else {
    activeIndex.value = index;

    // Подождать, пока контент появится в DOM
    await nextTick();

    // Получаем высоту раскрываемого контента
    if (accordionRefs.value[index]) {
      accordionHeights.value[index] = accordionRefs.value[index].scrollHeight;
    }
  }
};
</script>

<template>
  <div class="template">
    <div class="template-container !py-[80px] 768:!py-[40px]">
      <div
        v-html="content?.description"
        class="mb-10"
        v-if="content?.description"
      ></div>
      <div class="w-full mx-auto" v-if="content?.accordion_data">
        <div
          v-for="(item, index) in content?.accordion_data"
          :key="index"
          class="mb-6 text-[#192B69]"
        >
          <!-- Заголовок -->
          <div
            class="text-xl font-medium flex-center justify-between cursor-pointer px-5 py-4 bg-[#F4F5F8]"
            @click="toggleAccordion(index)"
          >
            <span class="mr-4">
              {{ item.title }}
            </span>
            <img
              :src="
                activeIndex === index
                  ? '/icons/accordion-minus2.svg'
                  : '/icons/accordion-plus2.svg'
              "
              alt="toggle-icon"
            />
          </div>

          <!-- Контент с анимацией -->
          <div
            ref="accordionRefs"
            class="accordion-content"
            :style="{
              maxHeight:
                activeIndex === index ? accordionHeights[index] + 'px' : '0px',
              opacity: activeIndex === index ? '1' : '0',
            }"
            v-html="item.description"
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
  transition: max-height 0.3s ease-in, opacity 0.3s ease-in;
}
</style>
