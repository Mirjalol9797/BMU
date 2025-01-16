export const useContactPage = () => {
  const nuxtApp = useNuxtApp();
  const { $api } = nuxtApp;

  const sendContact = async (payload) => {
    const res = await $api(`/api/appeal`, {
      method: "POST", // Указываем метод POST
      body: payload,
    });
    return res;
  };

  return {
    sendContact,
  };
};
