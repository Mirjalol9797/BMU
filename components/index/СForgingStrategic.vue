<script setup></script>

<template>
  <div
    class="bg-[#192B69] relative py-[100px] 1024:pb-0 768:pt-10"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div class="site-container grid grid-cols-2 1024:grid-cols-1">
      <div class="max-w-[450px] w-full text-white">
        <div class="text-5xl leading-[60px] mb-5 font-medium">
          Career Development Centre
        </div>
        <div class="mb-5">
          Offering services that range from selecting majors and planning
          careers to developing job search strategies, the center provides a
          robust support system.
        </div>
        <nuxt-link
          to="/"
          class="text-[#648AC8] inline-flex font-medium learn-more"
          >Learn More
          <img
            src="/icons/blue-arrow.svg"
            alt="blue-arrow"
            class="ml-4 transform transition-transform duration-2000"
        /></nuxt-link>
      </div>
      <div
        class="absolute top-4 right-0 max-w-[700px] 1024:relative 1024:max-w-full 1024:top-0 1024:right-[-16px] 1024:mt-14"
      >
        <img src="/images/forgin-strategic.png" alt="forgin-strategic" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
