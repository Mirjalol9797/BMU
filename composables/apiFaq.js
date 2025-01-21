export const useApiFaqs = () => {
  const nuxtApp = useNuxtApp();
  const { $api } = nuxtApp;

  const getFaqs = async (slug) => {
    const res = await $api(`/api/faq`);
    return res;
  };

  return {
    getFaqs,
  };
};
