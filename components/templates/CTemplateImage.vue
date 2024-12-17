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
      <div class="flex gap-14 py-[100px] 768:flex-col 768:py-[60px]">
        <div class="w-1/2 768:w-full">
          <img
            src="https://framerusercontent.com/images/KVIKHL1OStxBGafOmPo75bmAqU.png"
            alt=""
            class="mx-auto"
          />
        </div>
        <div class="w-1/2 768:w-full">
          <div class="text-5xl font-medium mb-8 768:text-2xl 768:mb-6">
            Welcome to the British Management University in Tashkent!
          </div>
          <div>
            In line with Uzbekistan’s commitment to improving higher education,
            the British Management University in Tashkent (hereinafter, the
            University) aspires to become a top regional higher education
            institution that nurtures future business leaders and prepares
            highly qualified professionals for key industries. To achieve this
            important goal, we provide quality British education by following
            best global education practices, by leveraging our corporate
            connections with industry leaders, and by giving our students
            professional knowledge and practical skills in business management,
            finance, accounting and related disciplines.The University provides
            world-class higher education for undergraduate and postgraduate
            students, as well as for executives and entrepreneurs. All of them
            will have a great opportunity to learn from the best international
            and local educators who will give them knowledge and skills on a par
            with top global universities. All of our programmes are designed and
            administered according to the best global standards, taught in
            English, and give students an opportunity to obtain not only a
            University degree, but also either an international professional
            diploma or a second degree from one of our partner universities. All
            of our graduates will possess professional knowledge and practical
            skills that will always be in demand in their chosen field. This
            will give them a real opportunity for employment in their speciality
            in Uzbekistan or abroad. The University’s executives and the
            University Advisory Board have a combined 50-year experience in
            senior positions in international higher education. Conrad Ozóg /
            Rector
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
