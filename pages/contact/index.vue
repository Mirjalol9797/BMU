<script setup></script>
<template>
  <CBannerAllPage title="Distinguished Faculty Memebers" />
  <div class="contact py-[100px] 768:py-[70px]">
    <div class="site-container">
      <div class="w-1/2 bg-[rgba(1,1,1,0.02)] p-12 mb-12 1024:w-full 768:p-6">
        <div class="text-2xl mb-9 font-medium">Contact Now:</div>
        <div class="font-medium mb-[60px]">
          <div class="text-[#424343] flex-center mb-2">
            <div class="w-5 h-[1.5px] bg-[#424343] mr-2"></div>
            <span>PHONE</span>
          </div>
          <a href="tel:+998955119999" class="text-xl font-medium 768:text-base"
            >+998 95 511 99 99</a
          >
        </div>
        <div class="font-medium mb-[60px]">
          <div class="text-[#424343] flex-center mb-2">
            <div class="w-5 h-[1.5px] bg-[#424343] mr-2"></div>
            <span>EMAIL</span>
          </div>
          <a
            href="mailto:info@bmu-edu.uz"
            class="text-xl font-medium 768:text-base"
            >info@bmu-edu.uz</a
          >
        </div>
        <div class="font-medium">
          <div class="text-[#424343] flex-center mb-2">
            <div class="w-5 h-[1.5px] bg-[#424343] mr-2"></div>
            <span>LOCATION</span>
          </div>
          <div class="text-xl font-medium 768:text-base">
            Mirzo Ulugbek district, Amir Temur mahalla, Mirzo Bobur street 35,
            Tashkent, Uzbekistan
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-6 768:grid-cols-1">
        <div class="p-12 bg-[rgba(1,1,1,0.02)] 768:p-6">
          <label class="mb-6 inline-block w-full">
            <div class="mb-2 text-xl 768:text-lg">Your Name</div>
            <input
              type="text"
              class="py-4 px-7 rounded-[32px] border border-[#424343] w-full"
              placeholder="Enter Name"
            />
          </label>
          <label class="mb-6 inline-block w-full">
            <div class="mb-2 text-xl 768:text-lg">Your Email</div>
            <input
              type="text"
              class="py-4 px-7 rounded-[32px] border border-[#424343] w-full"
              placeholder="Enter Name"
            />
          </label>
          <label class="mb-6 inline-block w-full">
            <div class="mb-2 text-xl 768:text-lg">Your Phone Number</div>
            <input
              type="text"
              class="py-4 px-7 rounded-[32px] border border-[#424343] w-full"
              placeholder="Enter Phone Number"
            />
          </label>
          <label class="mb-6 inline-block w-full">
            <div class="mb-2 text-xl 768:text-lg">Your Message</div>
            <textarea
              placeholder="Enter Message"
              class="py-4 px-7 min-h-[120px] rounded-[32px] border border-[#424343] w-full"
            ></textarea>
          </label>
          <button class="bg-[#648AC8] text-white py-4 px-7 rounded-full">
            Send Message
          </button>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.607744450507!2d69.37976340169757!3d41.32850281679719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b82eea369d7%3A0xbc51733ffe66b99c!2sBritish%20Management%20University%20in%20Tashkent!5e0!3m2!1sru!2s!4v1734335103310!5m2!1sru!2s"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.contact {
  iframe {
    @media (max-width: 768px) {
      height: 400px;
    }
  }
}
</style>
