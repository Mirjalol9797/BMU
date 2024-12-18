export const useApiSliders = () => {
  const nuxtApp = useNuxtApp();
  const { $api } = nuxtApp;

  const getSlider = async () => {
    const res = await $api(`/api/slider`);
    return res;
  };

  return {
    getSlider,
  };
};
