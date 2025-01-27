<script setup>
import { ref } from "vue";
import { useAsyncData } from "nuxt/app";

const getGallery = useApiGalleries();
const currentPage = ref(1);
const galleryList = ref({
  sort: "id",
  order: "desc",
  limit: 9,
  page: 1,
});
const { data: dataGallery } = useAsyncData("Gallery", () =>
  getGallery.getGallery(galleryList.value)
);

function changePagePagination() {
  galleryList.value.page = currentPage.value;

  getGallery.getGallery({
    ...galleryList.value,
  });
}
</script>
<template>
  <div class="my-14">
    <div class="site-container">
      <div
        class="text-center text-4xl font-medium mb-10 1024:text-3xl 768:!text-2xl"
      >
        {{ $t("our_campus_gallery") }}
      </div>
      <div class="gallery">
        <div
          class="gallery-item item-1"
          v-for="item in dataGallery?.data?.data?.gallery"
          :key="item.id"
        >
          <img :src="item.image" alt="Image 1" />
        </div>
      </div>
      <vue-awesome-paginate
        v-if="false"
        :total-items="50"
        :items-per-page="5"
        :max-pages-shown="5"
        v-model="currentPage"
        @click="changePagePagination"
      />
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
