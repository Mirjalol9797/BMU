<script setup></script>
<template>
  <CBannerAllPage title="Our News &Articles" />
  <div class="news py-[100px] 768:py-[70px]">
    <div class="site-container">
      <nuxt-link
        to="/"
        class="grid grid-cols-2 mb-10 1024:grid-cols-1 last:mb-0 768:mb-14"
        v-for="item in 2"
        :key="item"
      >
        <div class="">
          <img
            src="https://framerusercontent.com/images/Q9lx63caBiK49m1rhskauQKbD8g.jpg?scale-down-to=1024"
            alt=""
            class="w-full h-full object-cover"
          />
        </div>
        <div
          class="px-[60px] h-full py-10 shadow-[12px_4px_32px_0_rgba(0,0,0,0.06)] 640:py-6 640:px-4"
        >
          <div class="text-[#424343] mb-6 font-medium 640:text-base 640:mb-4">
            SCIENCE
          </div>
          <div class="text-3xl mb-6 font-medium 640:text-xl">
            Groundbreaking Research Discoveries Student Success Stories Here.
          </div>
          <div class="text-[#424343] text-height3">
            Provide most popular courses that your want to join and lets start
            the course for the most simply courses here you can build your
            career very smoothly most efficient Provide most popular courses
            that your want to join and lets start the course for the most simply
            courses here you can build your career very smoothly most
            efficient....
          </div>
        </div>
      </nuxt-link>
      <div class="news-content mt-[100px]">
        <div
          class="text-center text-5xl font-medium mb-4 1024:text-4xl 480:!text-3xl"
        >
          Latest News
        </div>
        <div class="text-center text-lg text-[#424343] mb-14 768:mb-8">
          One of the key advantages of technology in education is its ability to
          personalize learning experiences.
        </div>
        <div
          class="grid grid-cols-3 gap-8 768:grid-cols-2 768:gap-6 640:!grid-cols-1"
        >
          <nuxt-link
            to="/"
            class="shadow-[0px_7px_28.899999618530273px_0px_rgba(0,0,0,0.06)]"
            v-for="item in 7"
            :key="item"
          >
            <div class="h-[300px]">
              <img
                src="/images/news/news_page_img.png"
                alt="news_page_img"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="py-4 px-5">
              <div class="text-[#424343] mb-2 font-medium">Arts</div>
              <div class="text-xl font-medium 640:text-lg">
                Exploring Creative Expression Through Visual Arts Exhibition
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
