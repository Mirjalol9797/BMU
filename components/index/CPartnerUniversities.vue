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
        Many of our undergraduate and postgraduate programmes are designed in
        collaboration with well-known British universities and are
        quality-controlled by our partners.
      </div>
      <div class="grid grid-cols-2 gap-14 768:grid-cols-1" data-aos="fade-up">
        <div>
          <div class="h-[580px] w-full mb-8 768:h-[250px]">
            <img
              src="/images/partner_universities/university_of_reading.png"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
          <div class="text-white mb-3 text-4xl font-medium 1024:text-2xl">
            University of Reading
          </div>
          <div class="text-[#CFCFCF] mb-8">
            The BMU Foundation Programme is validated by the University of
            Reading (UK) – TOP-30 in the UK and TOP-250 of the best universities
            in the world. Upon completion of the BMU Foundation Programme,
            students will receive a Foundation Diploma from the University of
            Reading that will allow them to continue their studies in many
            universities in the U.K. and other countries.
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
          <div class="h-[580px] w-full mb-8 768:h-[250px]">
            <img
              src="/images/partner_universities/queen_margater_university.png"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
          <div class="text-white mb-3 text-4xl font-medium 1024:text-2xl">
            Queen Margaret University
          </div>
          <div class="text-[#CFCFCF] mb-8">
            QMU and BMU have been in partnership since 2023. The partnership is
            focused on the delivery of modern business, finance and accounting
            programmes that will prepare graduates for management careers in
            Uzbekistan, Central Asia and beyond. The programmes offered through
            this partnership are delivered by BMU, with quality assurance from
            QMU.
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
