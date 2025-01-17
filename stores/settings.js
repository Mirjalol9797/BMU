import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    isApplyNowModal: false,
    isSearchModal: false,
    isBurgerMenu: false,
    isLoader: false,
    textSearch: null,
    footerMenu: null,
    journeyData: null,
  }),
  getters: {},
  actions: {},
});
