<script setup>
import { useAsyncData } from "nuxt/app";

const getGallery = useApiGalleries();

const { data: dataGallery } = useAsyncData("Gallery", () =>
  getGallery.getGallery()
);
</script>
<template>
  <div class="mb-10">
    <div class="site-container">
      <div
        class="text-center text-5xl font-medium mb-10 1024:text-4xl 480:!text-3xl"
      >
        Our Campus Gallery
      </div>
      <div class="gallery">
        <div
          class="gallery-item item-1"
          v-for="item in dataGallery?.data?.gallery"
          :key="item.id"
        >
          <img :src="item.image" alt="Image 1" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(300px, 1fr)
  ); /* Автоматическая подгонка под количество элементов */
  gap: 10px;
  max-width: 1200px;
  margin: auto;
}

.gallery-item {
  overflow: hidden;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  transition: transform 0.3s ease;
}

.gallery-item img:hover {
  transform: scale(1.05);
}
</style>
