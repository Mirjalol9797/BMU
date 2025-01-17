<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

console.log("route", route.params.id);
</script>
<template>
  <div class="template">
    <CBannerAllPage title="Our News &Articles" />

    <div
      class="site-container !py-[100px] grid grid-cols-2 gap-10 768:grid-cols-1 768:gap-6 768:!py-[70px]"
    >
      {{ route.params.id }}
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
