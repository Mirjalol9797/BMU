<script setup></script>

<template>
  <div class="news py-[100px] 768:py-10">
    <div class="site-container">
      <div class="text-5xl font-medium mb-12 1024:text-4xl 480:!text-3xl">
        News & Events Central
      </div>
      <div class="grid grid-cols-2 gap-14 768:grid-cols-1">
        <div>
          <nuxt-link to="/" class="mb-9 inline-block">
            <div class="h-[200px] mb-4">
              <img
                src="https://framerusercontent.com/images/yHSSS7KYTYoU85kFwBaqI1III.png?scale-down-to=1024"
                alt=""
                class="w-full h-full object-cover"
              />
            </div>
            <div class="text-[#424343] font-medium mb-3">SCIENCE</div>
            <div class="text-2xl font-medium">
              Groundbreaking Research Discoveries Student Success Stories Here.
            </div>
          </nuxt-link>
          <nuxt-link
            to="/"
            class="flex justify-between gap-8 pb-6 border-b border-[#01010133] 640:flex-col"
          >
            <div>
              <div class="text-[#424343] font-medium mb-3">ARTS</div>
              <div class="text-2xl font-medium">
                Follow the trailblazing careers and accomplish
              </div>
            </div>
            <div class="w-[170px] 640:w-full 640:h-[180px]">
              <img
                src="https://framerusercontent.com/images/yHSSS7KYTYoU85kFwBaqI1III.png?scale-down-to=1024"
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
              <div class="text-[#424343] font-medium mb-3">ARTS</div>
              <div class="text-2xl font-medium">
                Follow the trailblazing careers and accomplish
              </div>
            </div>
            <div class="w-[170px] 640:w-full 640:h-[180px]">
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
