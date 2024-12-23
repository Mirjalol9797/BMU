<script setup>
import { useAsyncData } from "nuxt/app";

const getMembers = useApiMembers();

// fetch api
const { data: dataFacultyMembers } = useAsyncData("FacultyMembers", () =>
  getMembers.getFacultyMembers()
);
</script>
<template>
  <CBannerAllPage
    title="Distinguished Faculty Members"
    :image="dataFacultyMembers?.background?.image"
  />
  <div class="members-page py-[100px] 768:py-[70px]">
    <div class="site-container">
      <div class="grid grid-cols-3 gap-6 768:grid-cols-2 480:!grid-cols-1">
        <nuxt-link
          :to="localePath(`/member/${item.id}`)"
          v-for="item in dataFacultyMembers?.users"
          :key="item"
          class="members-page__item mb-6"
        >
          <div class="mb-4 overflow-hidden h-[460px]">
            <img
              :src="item.image"
              :alt="item.full_name"
              :title="item.full_name"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="text-2xl font-medium mb-1">{{ item.full_name }}</div>
          <div class="text-[#424343]" v-html="item.position"></div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.members-page {
  &__item {
    img {
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      img {
        transition: all 0.3s ease-in-out;
        transform: scale(1.1);
      }
    }
  }
}
</style>
