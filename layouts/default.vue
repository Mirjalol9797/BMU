<script setup>
import { onMounted } from "vue";
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
  <IndexCYourJourney />
  <LayoutFooter />
  <UiTmLoader v-if="settingsStore.isLoader" />
</template>

<style scoped></style>
