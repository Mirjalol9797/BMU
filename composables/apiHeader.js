export const useApiHeader = () => {
  const nuxtApp = useNuxtApp();
  const { $api } = nuxtApp;

  const getHeaderMenu = async () => {
    const res = await $api(`/clinic-specialties`);
    return res;
  };

  return {
    getHeaderMenu,
  };
};
