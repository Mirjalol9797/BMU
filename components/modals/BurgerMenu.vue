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
const openItem2 = ref([]);

const toggleAccordion = (id) => {
  if (openItem.value === id) {
    openItem.value = null;
  } else {
    openItem.value = id;
  }
};

const toggleAccordion2 = (id) => {
  if (openItem2.value === id) {
    openItem2.value = null;
  } else {
    openItem2.value = id;
  }
};

const isOpen = (id) => {
  return openItem.value === id;
};

const isOpen2 = (id) => {
  return openItem2.value === id;
};

function closeBurgerMenu() {
  settingsStore.isBurgerMenu = false;
  document.querySelector("body").classList.remove("open-modal");
}
</script>

<template>
  <div
    class="bg-white w-full fixed top-[-10px] left-0 h-full border-t border-[#E9EAEC] translate-y-[-1000px] transition-all duration-500 z-[1001] overflow-auto pb-[150px]"
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
            :to="
              menu?.url
                ? localePath(`/${menu?.url}`)
                : menu?.page_slug
                ? localePath(`/page/${menu?.page_slug}`)
                : ''
            "
            class="font-semibold inline-block"
            @click="closeBurgerMenu"
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
          class="accordion-content pl-8 pr-4 py-6 bg-[#F8F8F8]"
          v-if="isOpen(menu.id)"
        >
          <div
            v-for="(item, index) in menu.children"
            :key="index"
            class="mb-6 last:mb-0"
          >
            <div class="flex justify-between mb-4 last:mb-0">
              <nuxt-link
                :to="
                  item?.url
                    ? localePath(`/${item?.url}`)
                    : item?.page_slug
                    ? localePath(`/page/${item?.page_slug}`)
                    : ''
                "
                class="inline-block"
                :class="
                  menu.children?.length == 1 ? 'text-sm' : 'font-semibold'
                "
                @click="closeBurgerMenu"
              >
                {{ item.title }}
              </nuxt-link>
              <button
                v-if="item.children"
                @click="toggleAccordion2(item.id)"
                class="pl-8"
              >
                <img
                  src="/icons/mobile-menu-accar-icon.svg"
                  alt="mobile-menu"
                  :class="isOpen2(item.id) ? 'icon-rotate' : ''"
                />
              </button>
            </div>
            <ul v-if="isOpen2(item.id)">
              <li
                v-for="(item, index) in item.children"
                :key="index"
                class="mb-3 text-sm last:mb-0"
              >
                <nuxt-link
                  :to="
                    item?.url
                      ? localePath(`/${item?.url}`)
                      : item?.page_slug
                      ? localePath(`/page/${item?.page_slug}`)
                      : ''
                  "
                  @click="closeBurgerMenu"
                >
                  <span
                    :class="
                      item?.id == 58 ||
                      item?.id == 21 ||
                      item?.id == 77 ||
                      item?.id == 79 ||
                      item?.id == 86
                        ? 'font-semibold text-base'
                        : ''
                    "
                    >{{ item.title }}</span
                  >
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div
      class="relative language-view mt-[6px] px-4 border-t border-[#E9EAEC] pt-6"
      v-if="false"
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

    <a
      href="https://bit.ly/BMU_App_2025"
      class="text-sm text-white py-3 px-5 bg-[#648AC8] rounded-full font-medium w-[90%] flex justify-center items-center mx-auto mt-10"
    >
      {{ $t("contact_me") }}
    </a>
  </div>
</template>

<style lang="scss" scoped>
.icon-rotate {
  transform: rotate(180deg);
}
</style>
