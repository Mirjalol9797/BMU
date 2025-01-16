export const useApiMainPage = () => {
  const nuxtApp = useNuxtApp();
  const { $api } = nuxtApp;

  const getWelcomeInfo = async () => {
    const res = await $api(`/api/main_page_header`);
    return res;
  };

  const getPartnerUniversities = async () => {
    const res = await $api(`/api/homepage/partner-university`);
    return res;
  };

  return {
    getWelcomeInfo,
    getPartnerUniversities,
  };
};
