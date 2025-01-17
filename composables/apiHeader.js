export const useApiMenu = () => {
  const nuxtApp = useNuxtApp();
  const { $api } = nuxtApp;

  const getHeaderMenu = async (lang) => {
    console.log("lang", lang);

    const res = await $api(`/api/header/menu`, {
      headers: {
        "Accept-Language": lang, // Передаём заголовок Accept-Language
      },
    });
    return res;
  };

  const getFooterMenu = async (lang) => {
    const res = await $api(`/api/header/footer-menu`, {
      headers: {
        "Accept-Language": lang, // Передаём заголовок Accept-Language
      },
    });
    return res;
  };

  return {
    getHeaderMenu,
    getFooterMenu,
  };
};
