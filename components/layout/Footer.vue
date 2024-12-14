<script setup>
const settingsStore = useSettingsStore();
</script>

<template>
  <footer class="bg-[#1c335f] pt-[64px] 640:pt-[56px] 1024:pb-12">
    <div class="site-container text-white text-sm">
      <div
        class="border-b border-[#ffffff33] text-white text-sm pb-[56px] flex 640:flex-col 640:pb-0 640:border-b-0"
      >
        <div
          class="w-1/3 640:w-full 640:mb-10"
          v-for="(menu, index) in settingsStore.footerMenu"
          :key="index"
        >
          <nuxt-link
            :to="
              localePath(
                menu?.url ? `${menu?.url}` : `/page/${menu?.page?.slug}`
              )
            "
            class="text-lg text-white border-b-2 border-[#E22F24] pb-4 inline-block pr-3 font-bold mb-8 640:mb-6"
          >
            {{ menu.title }}
          </nuxt-link>

          <ul>
            <li
              class="mb-4 last:mb-0"
              v-for="(item, index) in menu.children"
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
        </div>
      </div>
      <div
        class="flex-center justify-between py-9 768:flex-col-reverse 640:!items-start"
      >
        <div class="text-[#ffffffb3]">
          ©2020 British Management University. {{ $t("all_rights_reserved") }}
        </div>
      </div>
    </div>
  </footer>
</template>
