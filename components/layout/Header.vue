<script setup>
import { useAsyncData } from "nuxt/app";
import { onMounted, ref, computed, watch } from "vue";
const settingsStore = useSettingsStore();
const { locales, locale, setLocale } = useI18n();

const getHeaderMenu = useApiMenu();
const localeView = computed(() =>
  locales.value.filter((item) => locale.value == item.code)
);

const dataHeaderMenu = ref(null);
const isLoading = ref(false);

// Функция для получения данных
async function fetchHeaderMenu() {
  isLoading.value = true; // Включаем лоадер
  try {
    const response = await getHeaderMenu.getHeaderMenu(); // Передаём текущий язык
    settingsStore.footerMenu = await getHeaderMenu.getFooterMenu();
    settingsStore.journeyData = await getHeaderMenu.getJourney();
    dataHeaderMenu.value = response; // Обновляем данные меню
  } catch (error) {
    console.error("Ошибка при получении меню:", error);
  } finally {
    isLoading.value = false; // Выключаем лоадер
  }
}

async function language(value) {
  setLocale(value);
  await nextTick();
  fetchHeaderMenu();
}

function openApplyNowModal() {
  settingsStore.isApplyNowModal = true;
  document.querySelector("body").classList.add("open-modal");
}

function openBurgerMenu() {
  settingsStore.isBurgerMenu = true;
  document.querySelector("body").classList.add("open-modal");
}

function closeBurgerMenu() {
  settingsStore.isBurgerMenu = false;
  document.querySelector("body").classList.remove("open-modal");
}

// Автоматически получаем данные меню при изменении языка
watch(locale, fetchHeaderMenu);

// Вызываем функцию получения данных при монтировании
onMounted(() => {
  fetchHeaderMenu();
});
</script>

<template>
  <header class="sticky top-0 bg-white z-[9]">
    <div class="bg-[#192B69] py-1.5">
      <div class="site-container flex-center justify-between 768:flex-col">
        <div class="text-[#D9D9D9] 768:mb-2 flex">
          <span class="pr-1">Notice:</span>
          News & Events Central
        </div>
        <div class="flex-center gap-6 480:gap-2">
          <div class="flex-center gap-2 text-white">
            <img src="/icons/header/phone.svg" alt="phone" class="w-5" />
            <a href="tel:+998 95 511 99 99">+998 95 511 99 99</a>
          </div>
          <div class="flex-center gap-2 text-white">
            <img src="/icons/header/sms.svg" alt="" class="w-5" />
            <a href="mailto:info@bmu-edu.uz">info@bmu-edu.uz</a>
          </div>
        </div>
      </div>
    </div>
    <div class="site-container">
      <div class="flex-center justify-between 1024:py-2.5">
        <nuxt-link :to="localePath('/')" class="w-[160px]">
          <img src="/images/site-logo.svg" alt="site-logo" />
        </nuxt-link>
        <ul class="flex-center mr-8 menu 1024:!hidden">
          <!-- header menu -->
          <li
            class="relative menu-link border-b-4 border-transparent duration-300 hover:border-b-4 hover:border-[#E22F24]"
            v-for="(menu, index) in dataHeaderMenu?.data?.tree"
            :key="index"
            :class="menu.children?.length > 1 ? 'menu-link-big' : ''"
          >
            <nuxt-link
              :to="
                menu?.url
                  ? localePath(`/${menu?.url}`)
                  : menu?.page_slug
                  ? localePath(`/page/${menu?.page_slug}`)
                  : ''
              "
              class="flex-center gap-1 py-[38px] px-3 menu-title"
            >
              {{ menu.title }}
              <img
                src="/icons/header/arrow-down.svg"
                alt=""
                v-if="menu.children?.length >= 1"
              />
            </nuxt-link>

            <!-- big menu -->
            <div class="sub-menu-big" v-if="menu.children?.length > 1">
              <div class="site-container flex">
                <div
                  class="max-w-[300px] w-full px-2"
                  v-for="(child, index) in menu.children"
                  :key="index"
                >
                  <nuxt-link
                    :to="
                      child?.url
                        ? localePath(`/${child?.url}`)
                        : child?.page_slug
                        ? localePath(`/page/${child?.page_slug}`)
                        : ''
                    "
                    class="text-base font-semibold mb-5 inline-block"
                  >
                    {{ child.title }}
                  </nuxt-link>

                  <ul class="text-sm">
                    <li
                      class="mb-4"
                      v-for="(item, index) in child.children"
                      :key="index"
                    >
                      <nuxt-link
                        :to="
                          item?.url
                            ? localePath(`/${item?.url}`)
                            : item?.page_slug
                            ? localePath(`/page/${item?.page_slug}`)
                            : ''
                        "
                      >
                        {{ item.title }}
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- mini sub menu -->
            <ul class="sub-menu-mini" v-if="menu.children?.length == 1">
              <li v-for="(item, index) in menu.children" :key="index">
                <nuxt-link
                  :to="
                    item?.url
                      ? localePath(`/${item?.url}`)
                      : item?.page_slug
                      ? localePath(`/page/${item?.page_slug}`)
                      : ''
                  "
                >
                  {{ item.title }}
                </nuxt-link>
              </li>

              <li
                v-for="(item, index) in menu.children[0].children"
                :key="index"
              >
                <nuxt-link
                  :to="
                    item?.url
                      ? localePath(`/${item?.url}`)
                      : item?.page_slug
                      ? localePath(`/page/${item?.page_slug}`)
                      : ''
                  "
                >
                  {{ item.title }}
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>

        <div class="flex-center gap-4">
          <nuxt-link
            :to="localePath(`/contact`)"
            class="inline-flex text-sm text-white py-3 px-5 bg-[#648AC8] rounded-full font-medium 1024:fixed 1024:w-full 1024:left-[0] 1024:rounded-none 1024:bottom-0 1024:z-20 1024:flex 1024:justify-center 1024:items-center"
          >
            {{ $t("contact_me") }}
          </nuxt-link>
          <a
            href="https://bmu-admission-system.netlify.app/signup"
            class="inline-flex text-sm text-white py-3 px-5 bg-[#FF0000] rounded-full font-medium 1024:fixed 1024:w-full 1024:left-[0] 1024:rounded-none 1024:bottom-0 1024:z-20 1024:flex 1024:justify-center 1024:items-center"
          >
            {{ $t("apply_now") }}
          </a>
          <div class="flex relative language-view mt-[6px] 1024:hidden">
            <div class="text-[#1C335F] font-semibold flex-center pb-1.5">
              <img
                :src="`/images/${localeView[0].image}`"
                alt=""
                class="mr-2"
              />
              <span>{{ localeView[0].name }}</span>
            </div>
            <ul class="language-list">
              <li
                v-for="(item, key) in locales"
                :key="key"
                @click="language(item.code)"
                class="flex-center"
              >
                <img :src="`/images/${item.image}`" alt="" class="mr-2" />
                {{ item.name }}
              </li>
            </ul>
          </div>
          <button class="hidden 1024:block">
            <img
              src="/icons/mobile-burger.svg"
              alt=""
              @click="openBurgerMenu"
              v-if="!settingsStore.isBurgerMenu"
            />
            <img
              src="/icons/mobile-burger-close.svg"
              alt=""
              @click="closeBurgerMenu"
              v-if="settingsStore.isBurgerMenu"
            />
          </button>
        </div>
      </div>
    </div>
  </header>

  <ModalsBurgerMenu v-show="settingsStore.isBurgerMenu" />

  <UiTmLoader v-if="isLoading" />
</template>

<style lang="scss" scoped>
.language-list {
  position: absolute;
  background: #fff;
  top: 30px;
  left: -8px;
  z-index: 12;
  border-radius: 6px;
  border: 1px solid #1c335f;
  font-size: 14px;
  line-height: 20px;
  width: 70px;
  display: none;

  li {
    padding: 6px 10px;
    &:hover {
      background: #1c335f;
      color: #fff;
    }
  }
}
.language-view {
  &:hover .language-list {
    display: block;
  }
}
.sub-menu-mini {
  position: absolute;
  top: 104px;
  left: 0;
  width: 260px;
  padding: 32px;
  background-color: #fff;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.12);
  z-index: 12;
  display: none;
  font-size: 14px;
  line-height: 20px;

  li {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.menu-link {
  &:hover .sub-menu-mini {
    display: block;
  }
  &:hover {
    .menu-title {
      img {
        transform: rotate(180deg);
      }
    }
  }
}

.menu-link-big {
  position: static;
  &:hover .sub-menu-big {
    display: block;
  }
}

.sub-menu-big {
  position: absolute;
  width: 100%;
  left: 0;
  background: #fff;
  z-index: 12;
  top: 140px;
  border-top: 1px solid #e9eaec;
  padding-top: 32px;
  padding-bottom: 40px;
  display: none;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.12);
}
</style>
