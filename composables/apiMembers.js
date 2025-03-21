export const useApiMembers = () => {
  const nuxtApp = useNuxtApp();
  const { $api } = nuxtApp;

  const getFacultyMembers = async () => {
    const res = await $api(`/api/faculty-members`);
    return res?.data;
  };

  const getAcademicAdvisoryBoard = async () => {
    const res = await $api(`/api/advisory-board`);
    return res?.data;
  };

  const getLeadershipTeam = async () => {
    const res = await $api(`/api/leadership-team`);
    return res?.data;
  };

  const getMemberId = async (id) => {
    const res = await $api(`/api/member/${id}`);
    return res?.data;
  };

  return {
    getFacultyMembers,
    getAcademicAdvisoryBoard,
    getLeadershipTeam,
    getMemberId,
  };
};
