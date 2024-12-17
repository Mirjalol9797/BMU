export const useApiMenu = () => {
  const nuxtApp = useNuxtApp();
  const { $api } = nuxtApp;

  const getHeaderMenu = async () => {
    const res = await $api(`/api/header/menu`);
    return res;
  };

  const getFooterMenu = async () => {
    const res = await $api(`/api/header/footer-menu`);
    return res;
  };

  return {
    getHeaderMenu,
    getFooterMenu,
  };
};
