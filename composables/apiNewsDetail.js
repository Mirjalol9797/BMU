export const useApiNewsDetail = () => {
  const nuxtApp = useNuxtApp();
  const { $api } = nuxtApp;

  const getNewsDetail = async (id) => {
    const res = await $api(`/api/news/${id}`);
    return res;
  };

  return {
    getNewsDetail,
  };
};
