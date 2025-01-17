<script setup>
import { useAsyncData } from "nuxt/app";
import { useRoute } from "vue-router";

const route = useRoute();

const getMember = useApiMembers();

// fetch api
const { data: dataMember } = useAsyncData("Member", () =>
  getMember.getMemberId(route.params.slug)
);
</script>
<template>
  <CBannerAllPage title="Distinguished Faculty Memebers" />
  <div class="teacher-page py-[100px] 768:py-[70px]">
    <div class="site-container">
      <div class="grid grid-cols-2 gap-x-10 mb-14 768:grid-cols-1">
        <div
          class="text-[#192B69] text-5xl font-medium 768:mb-10 768:text-3xl 480:!text-xl 480:!mb-6"
        >
          {{ dataMember?.full_name }}
        </div>
        <div>
          <div
            class="text-2xl font-medium mb-3 768:text-lg"
            v-html="dataMember?.position"
          ></div>
          <div class="mb-3">
            Marvin brings a wealth of knowledge and experience to the Department
            of Information Technology at our university. With a Ph.D.
          </div>
          <a href="mailto:marvin@gmail.com" class="text-[#648AC8]"
            >Mail: marvin@gmail.com</a
          >
        </div>
      </div>
      <div class="grid grid-cols-2 gap-10 768:grid-cols-1 768:gap-6">
        <div>
          <img
            :src="dataMember?.image"
            :alt="dataMember?.title"
            :title="dataMember?.title"
            class="w-full h-full object-cover"
          />
        </div>
        <div v-html="dataMember?.biography"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss"></style>
