<script setup></script>

<template>
  <div class="template">
    <div class="template-banner relative">
      <div class="w-full h-[440px] 768:h-[280px]">
        <img
          src="https://framerusercontent.com/images/Q9lx63caBiK49m1rhskauQKbD8g.jpg?scale-down-to=1024"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
      <h1 class="template-title">Licenses & Official Documents</h1>
    </div>
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

<style lang="scss" scoped>
.template {
  &-banner {
    &:after {
      content: "";
      position: absolute;
      background-color: rgba(0, 0, 0, 0.4);
      inset: 0;
      z-index: 8;
    }
  }
  &-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 80px;
    line-height: 100px;
    color: #fff;
    z-index: 9;
    text-align: center;
    font-weight: 500;

    @media (max-width: 1024px) {
      font-size: 48px;
      line-height: 60px;
    }

    @media (max-width: 768px) {
      font-size: 32px;
      line-height: 48px;
    }
  }
}
</style>
