export const useApiGalleries = () => {
  const nuxtApp = useNuxtApp();
  const { $api } = nuxtApp;

  const getGallery = async (galleryList) => {
    const res = await $api(`/api/gallery`, {
      method: "POST", // Указываем метод POST
      body: galleryList,
    });
    return res;
  };

  return {
    getGallery,
  };
};
