<script setup>
import { useAsyncData } from "nuxt/app";
const getMainPagesData = useApiMainPage();
const getArticles = useApiArticles();
const isLoading = ref(false);

// const { data: dataNews } = useAsyncData("News", () =>
//   getMainPagesData.getNews()
// );

// const { data: dataArticles } = useAsyncData("Articles", () =>
//   getArticles.getArticles()
// );

const { data: dataNews } = useAsyncData("News", async () => {
  isLoading.value = true; // Включаем лоадер
  try {
    return await getMainPagesData.getNews();
  } finally {
    isLoading.value = false; // Выключаем лоадер
  }
});

const { data: dataArticles } = useAsyncData("Articles", async () => {
  isLoading.value = true; // Включаем лоадер
  try {
    return await getArticles.getArticles();
  } finally {
    isLoading.value = false; // Выключаем лоадер
  }
});
</script>
<template>
  <CBannerAllPage title="Our News &Articles" />
  <div class="news py-[100px] 768:py-[70px]">
    <div class="site-container">
      <!-- article -->
      <div>
        <nuxt-link
          :to="localePath(`/articles-detail/${item.id}`)"
          class="grid grid-cols-2 mb-10 1024:grid-cols-1 last:mb-0 768:mb-14"
          v-for="item in dataArticles?.data?.data?.articles"
          :key="item"
        >
          <div class="">
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-full object-cover"
            />
          </div>
          <div
            class="px-[60px] h-full py-10 shadow-[12px_4px_32px_0_rgba(0,0,0,0.06)] 640:py-6 640:px-4"
          >
            <div
              class="text-[#424343] mb-6 font-medium uppercase 640:text-base 640:mb-4"
            >
              {{ item.category }}
            </div>
            <div class="text-3xl mb-6 font-medium 640:text-xl">
              {{ item.title }}
            </div>
            <div
              class="text-[#424343] text-height3"
              v-html="item.description"
            ></div>
          </div>
        </nuxt-link>
      </div>
      <!-- news -->
      <div class="news-content mt-[100px] 768:mt-[60px]">
        <div
          class="text-center text-5xl font-medium mb-4 1024:text-4xl 480:!text-3xl"
        >
          Latest News
        </div>
        <div class="text-center text-lg text-[#424343] mb-14 768:mb-8">
          One of the key advantages of technology in education is its ability to
          personalize learning experiences.
        </div>
        <div
          class="grid grid-cols-3 gap-8 768:grid-cols-2 768:gap-6 640:!grid-cols-1"
        >
          <nuxt-link
            :to="localePath(`/news-detail/${item.id}`)"
            class="shadow-[0px_7px_28.899999618530273px_0px_rgba(0,0,0,0.06)]"
            v-for="(item, index) in dataNews?.data?.data?.news"
            :key="index"
          >
            <div class="h-[300px]">
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="py-4 px-5">
              <div class="text-[#424343] mb-2 font-medium uppercase">
                {{ item.category }}
              </div>
              <div class="text-xl font-medium 640:text-lg">
                {{ item.title }}
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>

  <UiTmLoader v-if="isLoading" />
</template>
<style lang="scss" scoped></style>
