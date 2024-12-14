<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const settingsStore = useSettingsStore();
</script>

<template>
  <LayoutHeader />
  <div>
    <NuxtPage :key="route.fullPath" />
    <ModalsApplyNow v-if="settingsStore.isApplyNowModal" />
    <ModalsSearch v-if="settingsStore.isSearchModal" />
  </div>
  <LayoutFooter />
  <!-- <UiTmLoader v-if="settingsStore.isLoader" /> -->
</template>

<style scoped></style>
