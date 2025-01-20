export const useApiArticles = () => {
  const nuxtApp = useNuxtApp();
  const { $api } = nuxtApp;

  const getArticlesDetail = async (id) => {
    const res = await $api(`/api/articles/${id}`);
    return res;
  };

  const getArticles = async () => {
    const res = await $api(`/api/articles`, {
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
    getArticlesDetail,
    getArticles,
  };
};
