// import axios from "~/node_modules/axios/index";
import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const axiosPlugin = axios.create({});

  // axiosPlugin.defaults.baseURL = "https://bmu-api.tm.uz";
  axiosPlugin.defaults.baseURL = "https://api2.bmu-edu.uz/";
  // читай коммент в header.vue Тоже есть baseUrl его тоже надо менять

  axiosPlugin.interceptors.request.use(
    (config) => {
      config.headers["Accept-Language"] = nuxtApp.$i18n.locale.value;

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return {
    provide: {
      axiosPlugin: axiosPlugin,
    },
  };
});
