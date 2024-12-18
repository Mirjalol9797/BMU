<script setup></script>
<template>
  <div class="py-[130px] bg-[#192B69] 768:py-10">
    <div class="site-container">
      <div
        class="text-center text-5xl font-medium text-white mb-4 1024:text-4xl 480:!text-3xl"
        data-aos="fade-up"
      >
        Partner Universities
      </div>
      <div
        class="text-center text-lg text-[#CFCFCF] mb-14 768:mb-8"
        data-aos="fade-up"
      >
        We partner with top universities worldwide to expand opportunities,
        foster excellence, and inspire global connections.
      </div>
      <div class="grid grid-cols-2 gap-14 768:grid-cols-1" data-aos="fade-up">
        <div>
          <div class="h-[500px] w-full mb-8 768:h-[250px]">
            <img src="" alt="" class="w-full h-full object-cover" />
          </div>
          <div class="text-white mb-3 text-4xl font-medium 1024:text-2xl">
            University of Reading
          </div>
          <div class="text-[#CFCFCF] mb-8">
            Discover more about this exciting collaboration and the unique
            opportunities it offers students. From academic enrichment to career
            development, explore how this partnership can enhance your
            educational journey and open doors to a brighter future.
          </div>
          <nuxt-link
            to="/"
            class="text-[#648AC8] inline-flex items-center learn-more"
            >Learn more
            <img
              src="/icons/blue-arrow.svg"
              alt="blue-arrow"
              class="ml-4 transform transition-transform duration-2000"
            />
          </nuxt-link>
        </div>
        <div>
          <div class="h-[500px] w-full mb-8 768:h-[250px]">
            <img src="" alt="" class="w-full h-full object-cover" />
          </div>
          <div class="text-white mb-3 text-4xl font-medium 1024:text-2xl">
            Queen Margaret University
          </div>
          <div class="text-[#CFCFCF] mb-8">
            Discover more about this exciting collaboration and the unique
            opportunities it offers students. From academic enrichment to career
            development, explore how this partnership can enhance your
            educational journey and open doors to a brighter future.
          </div>
          <nuxt-link
            to="/"
            class="text-[#648AC8] inline-flex items-center learn-more"
            >Learn more
            <img
              src="/icons/blue-arrow.svg"
              alt="blue-arrow"
              class="ml-4 transform transition-transform duration-2000"
          /></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
