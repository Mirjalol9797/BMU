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
      <div class="template-title">Our Purpose & Aspiration</div>
    </div>
    <div
      class="site-container !py-[100px] grid grid-cols-2 gap-10 768:grid-cols-1 768:gap-6 768:!py-[70px]"
    >
      <div>
        <div class="text-5xl font-medium mb-4 1024:text-4xl 480:!text-3xl">
          title
        </div>
        <div>description</div>
      </div>
      <div>Content</div>
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
    font-size: 100px;
    line-height: 120px;
    color: #fff;
    z-index: 9;
    white-space: nowrap;

    @media (max-width: 1024px) {
      font-size: 48px;
      line-height: 60px;
    }

    @media (max-width: 768px) {
      font-size: 32px;
      line-height: 48px;
      white-space: break-spaces;
      text-align: center;
    }
  }
}
</style>
