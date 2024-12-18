export const useApiMainPage = () => {
  const nuxtApp = useNuxtApp();
  const { $api } = nuxtApp;

  const getWelcomeInfo = async () => {
    const res = await $api(`/api/main_page_header`);
    return res;
  };

  return {
    getWelcomeInfo,
  };
};
