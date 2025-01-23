export const useApiPages = () => {
  const nuxtApp = useNuxtApp();
  const { $api } = nuxtApp;

  const getPage = async (slug) => {
    const res = await $api(`/api/page/${slug}`);
    return res;
  };

  const getSettingsStandart = async () => {
    const res = await $api(`/api/settings`);
    return res;
  };

  return {
    getPage,
    getSettingsStandart,
  };
};
