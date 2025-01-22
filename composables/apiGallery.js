export const useApiGalleries = () => {
  const nuxtApp = useNuxtApp();
  const { $api } = nuxtApp;

  const getGallery = async () => {
    const res = await $api(`/api/gallery`);
    return res;
  };

  return {
    getGallery,
  };
};
