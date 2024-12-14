<script setup>
import { useAsyncData } from "nuxt/app";
import { onMounted } from "vue";
const settingsStore = useSettingsStore();
const { locales, locale, setLocale } = useI18n();
const getHeaderMenu = useApiHeader();

const localeView = computed(() =>
  locales.value.filter((item) => locale.value == item.code)
);

// fetch api
const { data: dataHeaderMenu } = useAsyncData("HeaderMenu", () =>
  getHeaderMenu.getHeaderMenu()
);

onMounted(() => {
  console.log("dataHeaderMenu", dataHeaderMenu);
});

function language(value) {
  setLocale(value);
  getHeader(value);
  getFooter(value);
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

// api

// const headerMenu = ref(null);
// const { $axiosPlugin } = useNuxtApp();

// async function getHeader(lang) {
//   settingsStore.isLoader = true;

//   await fetch(`${baseUrl}/api/header/menu`, {
//     headers: { "Accept-Language": lang || locale.value },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       headerMenu.value = data.data.tree;
//     })
//     .catch((error) => console.log(error));
//   settingsStore.isLoader = false;
// }

// async function getFooter(lang) {
//   settingsStore.isLoader = true;

//   await fetch(`${baseUrl}/api/header/footer-menu`, {
//     headers: { "Accept-Language": lang || locale.value },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       settingsStore.footerMenu = data.data.tree;
//     })
//     .catch((error) => console.log(error));

//   settingsStore.isLoader = false;
// }

// getHeader();
// getFooter();
</script>

<template>
  <header class="relative">
    <div class="bg-[#192B69] py-1.5">
      <div class="site-container flex-center justify-between 768:flex-col">
        <div class="text-[#D9D9D9] 768:mb-2">Notice: News & Events Central</div>
        <div class="flex-center gap-6">
          <div class="flex-center gap-2 text-white">
            <img src="" alt="" class="w-5" />
            <a href="tel:+998 95 511 99 99">+998955119999</a>
          </div>
          <div class="flex-center gap-2 text-white">
            <img src="" alt="" class="w-5" />
            <a href="mailto:info@bmu-edu.uz">info@bmu-edu.uz</a>
          </div>
        </div>
      </div>
    </div>
    <div class="site-container !py-5">
      <div class="flex-center justify-between">
        <nuxt-link :to="localePath('/')" class="w-[190px]">
          <img src="/images/site-logo.png" alt="" />
        </nuxt-link>
        <ul class="flex-center mr-8 menu 1024:!hidden">
          <!-- header menu -->
          <li
            class="relative menu-link border-b-4 border-transparent duration-300 hover:border-b-4 hover:border-[#E22F24]"
            v-for="(menu, index) in dataHeaderMenu"
            :key="index"
            :class="menu.children?.length > 1 ? 'menu-link-big' : ''"
          >
            <nuxt-link
              :to="
                localePath(
                  menu?.url ? `${menu?.url}` : `/page/${menu?.page?.slug}`
                )
              "
              class="inline-block py-[38px] px-3 text-sm"
            >
              {{ menu.title }}
            </nuxt-link>

            <!-- big menu -->
            <div class="sub-menu-big" v-if="menu.children?.length > 1">
              <div class="site-container flex justify-between">
                <div
                  class="max-w-[300px] w-full px-2"
                  v-for="(child, index) in menu.children"
                  :key="index"
                >
                  <nuxt-link
                    :to="
                      localePath(
                        child?.url
                          ? `${child?.url}`
                          : `/page/${child?.page?.slug}`
                      )
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
                          localePath(
                            item?.url
                              ? `${item?.url}`
                              : `/page/${item?.page?.slug}`
                          )
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
                    localePath(
                      item?.url ? `${item?.url}` : `/page/${item?.page?.slug}`
                    )
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
                    localePath(
                      item?.url ? `${item?.url}` : `/page/${item?.page?.slug}`
                    )
                  "
                >
                  {{ item.title }}
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>

        <div class="flex-center gap-10">
          <button
            class="text-base text-white py-[14px] px-[22px] bg-[#648AC8] rounded-full font-medium 1024:fixed 1024:w-full 1024:left-[0] 1024:rounded-none 1024:bottom-0 1024:z-10 1024:flex 1024:justify-center 1024:items-center"
            @click="openApplyNowModal"
          >
            {{ $t("apply_now") }}
          </button>
          <div
            class="mr-[50px] flex relative language-view mt-[6px] 1024:hidden"
          >
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
          <button class="hidden 1024:block" @click="openBurgerMenu">
            <img src="/icons/mobile-burger.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  </header>

  <ModalsBurgerMenu
    v-show="settingsStore.isBurgerMenu"
    :headerMenu="headerMenu"
  />
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
  top: 100px;
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
  top: 100px;
  border-top: 1px solid #e9eaec;
  padding-top: 32px;
  padding-bottom: 40px;
  display: none;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.12);
}
</style>
