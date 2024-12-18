<script setup></script>

<template>
  <div class="template">
    <CBannerAllPage />

    <div class="site-container">
      <div class="py-[100px] 768:py-[70px]">
        <div
          class="flex-center gap-14 mb-[100px] last:mb-0 768:flex-col 768:gap-8"
          v-for="(item, index) in 4"
          :key="index"
          :class="index % 2 == 1 ? 'flex-row-reverse' : ''"
        >
          <div class="max-h-[640px] w-1/2 768:w-full">
            <img
              src="https://framerusercontent.com/images/Q9lx63caBiK49m1rhskauQKbD8g.jpg?scale-down-to=1024"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
          <div class="w-1/2 768:w-full">
            <div
              class="text-5xl font-medium mb-8 1024:text-4xl 768:mb-4 768:!text-3xl"
            >
              Physical Library Collection
            </div>
            <div class="text-[#424343]">
              The BMU library provides access to academic textbooks and a
              collection of general and fiction literature, organized in
              accordance with the Dewey Decimal Classification system. For daily
              operations, BMU is using the Library Management System (LMS). The
              library premises are divided into the following zones: main zone,
              restricted zone (book depository), and open access space.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
