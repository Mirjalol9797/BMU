<script setup>
const props = defineProps({
  news: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <div
    class="news py-[100px] 768:py-10"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div class="site-container">
      <div class="text-5xl font-medium mb-12 1024:text-4xl 480:!text-3xl">
        News & Events
      </div>
      <div class="grid grid-cols-2 gap-14 768:grid-cols-1 768:gap-8">
        <div>
          <nuxt-link
            :to="
              localePath(`/news-detail/${news?.data?.news?.credentials[0]?.id}`)
            "
            class="mb-9 inline-block"
          >
            <div class="h-[200px] mb-4">
              <img
                :src="news?.data?.news?.credentials[0]?.image"
                :alt="news?.data?.news?.credentials[0]?.title"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="text-[#424343] font-medium mb-3 uppercase">
              {{ news?.data?.news?.credentials[0]?.category }}
            </div>
            <div class="text-xl font-medium">
              {{ news?.data?.news?.credentials[0]?.title }}
            </div>
          </nuxt-link>
          <nuxt-link
            :to="
              localePath(`/news-detail/${news?.data?.news?.credentials[1]?.id}`)
            "
            class="flex justify-between gap-8 pb-6 border-b border-[#01010133] 640:flex-col"
          >
            <div>
              <div class="text-[#424343] font-medium mb-3 uppercase">
                {{ news?.data?.news?.credentials[1]?.category }}
              </div>
              <div class="text-xl font-medium 640:text-lg">
                {{ news?.data?.news?.credentials[1]?.title }}
              </div>
            </div>
            <div
              class="max-w-[170px] min-w-[170px] h-[100px] 640:max-w-full 640:min-w-full 640:h-auto"
            >
              <img
                :src="news?.data?.news?.credentials[1]?.image"
                :alt="news?.data?.news?.credentials[1]?.title"
                class="w-full h-full object-cover"
              />
            </div>
          </nuxt-link>
        </div>
        <div>
          <nuxt-link
            :to="localePath(`/news-detail/${item.id}`)"
            class="flex justify-between gap-8 pb-6 border-b border-[#01010133] mb-8 640:flex-col"
            v-for="(item, index) in news?.data?.news?.credentials.slice(1)"
            :key="index"
          >
            <div>
              <div class="text-[#424343] font-medium mb-3">
                {{ item.category }}
              </div>
              <div class="text-xl font-medium 640:text-lg">
                {{ item.title }}
              </div>
            </div>
            <div
              class="max-w-[170px] min-w-[170px] h-[100px] 640:max-w-full 640:min-w-full 640:h-auto"
            >
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover"
              />
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
