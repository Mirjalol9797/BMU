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

  const getOurAcademicPrograms = async () => {
    const res = await $api(`/api/homepage/academic-programs`);
    return res;
  };

  const getWhatSetsUsApart = async () => {
    const res = await $api(`/api/homepage/what-sets-us-apart`);
    return res;
  };

  const getForgingStrategic = async () => {
    const res = await $api(`/api/homepage/forging-strategic`);
    return res;
  };

  const getDiscoverStudentThink = async () => {
    const res = await $api(`/api/homepage/discover-student-think`);
    return res;
  };

  return {
    getWelcomeInfo,
    getPartnerUniversities,
    getOurAcademicPrograms,
    getWhatSetsUsApart,
    getForgingStrategic,
    getDiscoverStudentThink,
  };
};
