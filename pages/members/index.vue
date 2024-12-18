<script setup></script>
<template>
  <CBannerAllPage title="Distinguished Faculty Memebers" />
  <div class="members-page py-[100px] 768:py-[70px]">
    <div class="site-container">
      <div class="grid grid-cols-3 gap-6 768:grid-cols-2 480:!grid-cols-1">
        <nuxt-link
          to="/"
          v-for="item in 7"
          :key="item"
          class="members-page__item mb-6"
        >
          <div class="mb-4 overflow-hidden">
            <img
              src="https://framerusercontent.com/images/G8IPOia19ht2yFm8hCxawquAzE.png?scale-down-to=1024"
              alt=""
            />
          </div>
          <div class="text-2xl font-medium mb-1">Dr. Jacob Jones</div>
          <div class="text-[#424343]">Sr. Lecturer Dept of CSE</div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.members-page {
  &__item {
    img {
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      img {
        transition: all 0.3s ease-in-out;
        transform: scale(1.1);
      }
    }
  }
}
</style>
