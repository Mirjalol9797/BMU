<script setup>
import { ref } from "vue";
import { useAsyncData } from "nuxt/app";

const getSettingStandart = useApiPages();
const isLoading = ref(false);

const { data: dataSettingStandart } = useAsyncData(
  "SettingStandart",
  async () => {
    isLoading.value = true; // Включаем лоадер
    try {
      return await getSettingStandart.getSettingsStandart();
    } finally {
      isLoading.value = false; // Выключаем лоадер
    }
  }
);

console.log("dataSettingStandart", dataSettingStandart);
</script>
<template>
  <div class="c-settings-standart my-14">
    <div class="site-container">
      <div
        class="text-center text-4xl font-medium mb-4 1024:text-3xl 768:mb-4 768:!text-2xl"
      >
        {{ dataSettingStandart?.data?.title }}
      </div>
      <div class="text-[#424343] text-center text-lg mb-10">
        {{ dataSettingStandart?.data?.description }}
      </div>
      <div class="grid grid-cols-4 gap-6 768:grid-cols-2 480:!grid-cols-1">
        <div
          v-for="(item, index) in dataSettingStandart?.data?.children"
          :key="index"
          class="pt-10 pb-2 px-8 border-l border-[#01010133] 768:px-0 768:border-0 768:pt-6"
        >
          <div class="mb-[100px] 768:mb-10">
            <img :src="item.image" :alt="item.title" class="w-[48px]" />
          </div>
          <div class="text-2xl font-medium 768:text-lg mb-4">
            {{ item.title }}
          </div>
          <div class="text-[#424343]">
            {{ item.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
