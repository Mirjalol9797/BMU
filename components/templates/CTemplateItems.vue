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
      <div class="py-[100px] 768:py-[60px]">
        <div
          class="flex mb-[100px] last:mb-0 1024:flex-col 768:mb-14"
          v-for="item in 2"
          :key="item"
        >
          <div class="w-1/2 1024:w-full">
            <img
              src="https://framerusercontent.com/images/Q9lx63caBiK49m1rhskauQKbD8g.jpg?scale-down-to=1024"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
          <div
            class="w-1/2 px-[60px] py-10 shadow-[12px_4px_32px_0_rgba(0,0,0,0.06)] 1024:w-full 640:py-6 640:px-4"
          >
            <div
              class="text-[#648AC8] text-xl mb-6 font-medium 640:text-base 640:mb-4"
            >
              Licences & Ligal Documentation
            </div>
            <div class="text-4xl mb-4 font-medium 640:text-xl">
              BMU license, issued by the State Inspectorate for Supervision of
              Quality in Education
            </div>
            <div class="text-[#424343]">
              The British Management University is the 8th private university to
              have a license, issued by the government. The University was
              established based on the Resolution of the Cabinet of Ministers of
              the Republic of Uzbekistan
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
