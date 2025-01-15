export default defineNuxtPlugin((nuxtApp) => {
  const api = $fetch.create({
    // baseURL: "https://bmu-api.tm.uz",
    baseURL: "https://api2.bmu-edu.uz/",

    onRequest({ options }) {
      const headers = (options.headers ||= {});
      const locale = nuxtApp.$i18n.locale.value;

      if (Array.isArray(headers)) {
        headers.push(["Accept-Language", locale]);
      } else if (headers instanceof Headers) {
        headers.set("Accept-Language", locale);
      } else {
        headers["Accept-Language"] = locale;
      }
    },
    async onResponseError({ response }) {
      if (response.status === 401) {
        await nuxtApp.runWithContext(() => navigateTo("/"));
      }
    },
  });

  return {
    provide: {
      api,
    },
  };
});
