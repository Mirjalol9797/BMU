<script setup>
import { onMounted } from "vue";
useHead({
  link: [
    {
      rel: "canonical",
      href: "https://bmu-edu.uz/ru/",
    },
    {
      rel: "preload",
      href: "https://fonts.gstatic.com",
    },
    {
      rel: "alternate",
      hreflang: "uz",
      href: "https://bmu-edu.uz/uz/",
    },
    {
      rel: "alternate",
      hreflang: "ru",
      href: "https://bmu-edu.uz/ru/",
    },
    {
      rel: "alternate",
      hreflang: "x-default",
      href: "https://bmu-edu.uz/",
    },
  ],
  // meta: [{ "http-equiv": "Content-Security-Policy", content: "*" }],
});

const { $aos } = useNuxtApp();

onMounted(() => {
  $aos();
});
</script>

<template>
  <NuxtLayout></NuxtLayout>
</template>
