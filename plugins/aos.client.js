// plugins/aos.client.ts
import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      aos: () => AOS.init({ once: true }), // once: true запускает анимацию только один раз
    },
  };
});
