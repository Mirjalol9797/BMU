export const useApiMainPage = () => {
  const nuxtApp = useNuxtApp();
  const { $api } = nuxtApp;

  const getScholarlyCommunities = async () => {
    const res = await $api(`/api/homepage/scholarly-communities`);
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

  const getNews = async () => {
    const res = await $api(`/api/news`, {
      method: "POST", // Указываем метод POST
      body: {
        sort: "id",
        order: "desc",
        limit: 5,
        page: 1,
      },
    });
    return res;
  };

  return {
    getScholarlyCommunities,
    getPartnerUniversities,
    getOurAcademicPrograms,
    getWhatSetsUsApart,
    getForgingStrategic,
    getDiscoverStudentThink,
    getNews,
  };
};
