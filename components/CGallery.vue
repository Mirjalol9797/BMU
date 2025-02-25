<script setup>
import { ref, computed, watch } from "vue";
import { useAsyncData } from "nuxt/app";

const getGallery = useApiGalleries();
const currentPage = ref(1);
const props = defineProps({
  limit: {
    type: Number,
    default: 9,
  },
});

const galleryList = ref({
  sort: "id",
  order: "desc",
  limit: props.limit, // Количество элементов на странице
  page: currentPage.value,
});

// Запрос данных с сервера
const { data: dataGallery, refresh } = useAsyncData("Gallery", () =>
  getGallery.getGallery(galleryList.value)
);

// Определяем общее количество страниц из бэкенда
const totalPages = computed(
  () => dataGallery?.value?.data?.data?.pagination?.total_pages || 1
);

// Следим за изменением `currentPage` и обновляем данные
watch(currentPage, () => {
  galleryList.value.page = currentPage.value;
  refresh(); // Перезапрашиваем данные при смене страницы
});

// Формируем массив страниц для пагинации
const pages = computed(() => {
  const range = [];
  for (let i = 1; i <= totalPages.value; i++) {
    if (
      i === 1 ||
      i === totalPages.value ||
      (i >= currentPage.value - 1 && i <= currentPage.value + 1)
    ) {
      range.push(i);
    } else if (range[range.length - 1] !== "...") {
      range.push("...");
    }
  }
  return range;
});

// Функция смены страницы
const changePage = (page) => {
  if (page !== "..." && page !== currentPage.value) {
    currentPage.value = page;
  }
};
</script>

<template>
  <div class="my-14">
    <div class="site-container">
      <div
        class="text-center text-4xl font-medium mb-10 1024:text-3xl 768:!text-2xl"
      >
        {{ $t("our_campus_gallery") }}
      </div>

      <!-- Галерея -->
      <div class="gallery">
        <div
          class="gallery-item item-1"
          v-for="item in dataGallery?.data?.data?.gallery"
          :key="item.id"
        >
          <img :src="item.image" alt="Gallery Image" />
        </div>
      </div>

      <!-- Пагинация -->
      <nav v-if="totalPages > 1" class="pagination">
        <button
          @click="changePage(currentPage - 1)"
          :disabled="currentPage === 1"
        >
          ‹
        </button>
        <button
          v-for="page in pages"
          :key="page"
          @click="changePage(page)"
          :class="{ active: page === currentPage }"
          :disabled="page === '...'"
        >
          {{ page }}
        </button>
        <button
          @click="changePage(currentPage + 1)"
          :disabled="currentPage === totalPages"
        >
          ›
        </button>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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

/* Стили для пагинации */
.pagination {
  display: flex;
  gap: 5px;
  justify-content: center;
  margin-top: 20px;
}

button {
  padding: 8px 12px;
  border: none;
  background: #ddd;
  cursor: pointer;
  border-radius: 5px;
}

button.active {
  background: #648ac8;
  color: white;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
