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
        <div
          class="flex-center 768:pb-9 640:flex-col-reverse 640:!items-start 640:border-b 640:border-[#ffffff33] 640:mb-8 640:w-full"
        >
          <a
            href="mailto:Info@bmu-edu.uz"
            class="flex-center text-base mr-[80px] 640:mr-0"
          >
            <img src="/icons/email.svg" alt="email" class="mr-2" />
            <span>Info@bmu-edu.uz</span>
          </a>
          <div class="flex-center 640:mb-5">
            <a href="https://t.me/BMUedu" target="_blank" class="mx-1 640:ml-0">
              <img src="/icons/telegram.svg" alt="telegram" />
            </a>
            <a
              href="https://yandex.uz/maps/org/175097600348/?ll=69.245041%2C41.323372&z=16"
              target="_blank"
              class="mx-1"
            >
              <img src="/icons/location.svg" alt="location" />
            </a>
            <a
              href="https://www.facebook.com/bmuedutashkent/"
              target="_blank"
              class="mx-1"
            >
              <img src="/icons/facebook.svg" alt="" />
            </a>
            <a
              href="https://www.linkedin.com/school/british-management-university/"
              target="_blank"
              class="mx-1"
            >
              <img src="/icons/linkedin.svg" alt="" />
            </a>
            <a
              href="https://www.youtube.com/c/BritishManagementUniversity"
              target="_blank"
              class="mx-1"
            >
              <img src="/icons/youtube.svg" alt="" />
            </a>
            <a
              href="https://www.instagram.com/bmuedu/"
              target="_blank"
              class="mx-1"
            >
              <img src="/icons/instagram.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
