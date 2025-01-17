<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Licenses & Official Documents",
  },
  image: {
    type: String,
    default:
      "https://framerusercontent.com/images/Q9lx63caBiK49m1rhskauQKbD8g.jpg?scale-down-to=1024",
  },
});
</script>
<template>
  <div class="banner-all-page">
    <div class="banner-all-page__wrap relative">
      <div class="w-full h-[440px] 768:h-[280px]">
        <img :src="image" alt="" class="w-full h-full object-cover" />
      </div>
      <h1 class="banner-all-page__title">{{ title }}</h1>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.banner-all-page {
  &__wrap {
    &:after {
      content: "";
      position: absolute;
      background-color: rgba(0, 0, 0, 0.4);
      inset: 0;
      z-index: 6;
    }
  }
  &__title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 80px;
    line-height: 100px;
    color: #fff;
    z-index: 7;
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
