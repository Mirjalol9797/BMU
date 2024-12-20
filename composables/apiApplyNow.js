export const useApiApplyNow = () => {
  const nuxtApp = useNuxtApp();
  const { $api } = nuxtApp;

  const sendPhoneNumber = async () => {
    const res = await $api(`/api/slider`, {
      method: "POST", // Указываем метод POST
      body: {
        phone: "+(998) 90 045 67 65",
      },
    });
    return res;
  };

  return {
    getSlider,
  };
};
