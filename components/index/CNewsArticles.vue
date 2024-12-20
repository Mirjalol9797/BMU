<script setup></script>

<template>
  <div
    class="news py-[100px] 768:py-10"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div class="site-container">
      <div class="text-5xl font-medium mb-12 1024:text-4xl 480:!text-3xl">
        News & Events
      </div>
      <div class="grid grid-cols-2 gap-14 768:grid-cols-1 768:gap-8">
        <div>
          <nuxt-link to="/" class="mb-9 inline-block">
            <div class="h-[200px] mb-4">
              <img
                src="/images/news/news_events.png"
                alt=""
                class="w-full h-full object-cover"
              />
            </div>
            <div class="text-[#424343] font-medium mb-3">EVENTS</div>
            <div class="text-xl font-medium">
              Celebrating Success - First Graduation Class of 2024
            </div>
          </nuxt-link>
          <nuxt-link
            to="/"
            class="flex justify-between gap-8 pb-6 border-b border-[#01010133] 640:flex-col"
          >
            <div>
              <div class="text-[#424343] font-medium mb-3">SPORTS</div>
              <div class="text-xl font-medium 640:text-lg">
                Competitive Spirit - Tournaments in Chess, Volleyball, and B
                asketball
              </div>
            </div>
            <div
              class="max-w-[170px] min-w-[170px] h-[100px] 640:max-w-full 640:min-w-full 640:h-auto"
            >
              <img
                src="/images/news/news2.png"
                alt=""
                class="w-full h-full object-cover"
              />
            </div>
          </nuxt-link>
        </div>
        <div>
          <nuxt-link
            to="/"
            class="flex justify-between gap-8 pb-6 border-b border-[#01010133] mb-8 640:flex-col"
            v-for="item in 3"
            :key="item"
          >
            <div>
              <div class="text-[#424343] font-medium mb-3">EVENTS</div>
              <div class="text-xl font-medium 640:text-lg">
                CAREER FAIR 2024 - An ultimate event for your professional
                growth
              </div>
            </div>
            <div
              class="max-w-[170px] min-w-[170px] h-[100px] 640:max-w-full 640:min-w-full 640:h-auto"
            >
              <img
                src="https://framerusercontent.com/images/yHSSS7KYTYoU85kFwBaqI1III.png?scale-down-to=1024"
                alt=""
                class="w-full h-full object-cover"
              />
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
