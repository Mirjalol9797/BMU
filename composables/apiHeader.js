export const useApiMenu = () => {
  const nuxtApp = useNuxtApp();
  const { $api } = nuxtApp;

  const getHeaderMenu = async (lang) => {
    console.log("lang", lang);

    const res = await $api(`/api/header/menu`);
    return res;
  };

  const getFooterMenu = async (lang) => {
    const res = await $api(`/api/header/footer-menu`);
    return res;
  };

  return {
    getHeaderMenu,
    getFooterMenu,
  };
};
