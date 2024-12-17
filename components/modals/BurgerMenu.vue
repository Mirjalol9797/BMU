<script setup>
import { ref } from "vue";
const settingsStore = useSettingsStore();
const { locales, locale, setLocale } = useI18n();

const langList = ref(false);
const localeView = computed(() =>
  locales.value.filter((item) => locale.value == item.code)
);

const getHeaderMenu = useApiMenu();

const { data: dataHeaderMenu } = useAsyncData("HeaderMenu", () =>
  getHeaderMenu.getHeaderMenu()
);

function language(value) {
  setLocale(value);
  settingsStore.isBurgerMenu = false;
  document.querySelector("body").classList.remove("open-modal");
  langList.value = !langList.value;
}

function openLangList() {
  langList.value = !langList.value;
}

const openItem = ref([]);

const toggleAccordion = (id) => {
  if (openItem.value === id) {
    openItem.value = null;
  } else {
    openItem.value = id;
  }
};

const isOpen = (id) => {
  return openItem.value === id;
};
</script>

<template>
  <div
    class="bg-white w-full fixed top-0 left-0 h-full border-t border-[#E9EAEC] translate-y-[-1000px] transition-all duration-500 z-[1001] overflow-auto pb-[150px]"
    :class="
      settingsStore.isBurgerMenu
        ? 'translate-y-[111px] 768:translate-y-[143px]'
        : ''
    "
  >
    <div class="accordion">
      <div
        v-for="(menu, index) in dataHeaderMenu.data.tree"
        :key="index"
        class="accordion-item"
      >
        <div class="accordion-header p-4 flex items-center justify-between">
          <nuxt-link
            :to="localePath(`/page/${menu.url}`)"
            class="font-semibold inline-block"
          >
            {{ menu.title }}
          </nuxt-link>
          <button
            v-if="menu.children"
            @click="toggleAccordion(menu.id)"
            class="pl-8"
          >
            <img
              src="/icons/mobile-menu-accar-icon.svg"
              alt="mobile-menu"
              :class="isOpen(menu.id) ? 'icon-rotate' : ''"
            />
          </button>
        </div>
        <div
          class="accordion-content px-8 py-6 bg-[#F8F8F8]"
          v-if="isOpen(menu.id)"
        >
          <div
            v-for="(item, index) in menu.children"
            :key="index"
            class="mb-6 last:mb-0"
          >
            <nuxt-link
              :to="localePath(`/page/${item.url}`)"
              class="inline-block"
              :class="
                menu.children?.length == 1
                  ? 'text-sm mb-3'
                  : 'font-semibold mb-4'
              "
            >
              {{ item.title }}
            </nuxt-link>
            <ul>
              <li
                v-for="(item, index) in item.children"
                :key="index"
                class="mb-3 text-sm last:mb-0"
              >
                <nuxt-link :to="localePath(`/page/${item.url}`)">
                  {{ item.title }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div
      class="relative language-view mt-[6px] px-4 border-t border-[#E9EAEC] pt-6"
    >
      <div
        class="text-[#1C335F] font-semibold flex-center mb-3"
        @click="openLangList"
      >
        <img :src="`/images/${localeView[0].image}`" alt="" class="mr-2" />
        <span>{{ localeView[0].name }}</span>

        <img
          src="/icons/mobile-menu-accar-icon.svg"
          alt="mobile-menu"
          class="absolute right-4"
          :class="langList ? 'icon-rotate' : ''"
        />
      </div>
      <ul class="language-list" v-if="langList">
        <li
          v-for="(item, key) in locales"
          :key="key"
          @click="language(item.code)"
          class="flex-center mb-3"
        >
          <img :src="`/images/${item.image}`" alt="" class="mr-2" />
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icon-rotate {
  transform: rotate(180deg);
}
</style>
