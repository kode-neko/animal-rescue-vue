import { defineStore } from 'pinia'

const useUserStore = defineStore('user', {
  state: () => {
    return {
      name: '',
      mail: '',
      lang: 'es',
      theme: 'dark',
    }
  },
  actions: {
    setUser(user) {
      this.state = user;
    },
    setLang(lang) {
      this.state.lang = lang;
    },
    setTheme(theme) {
      this.state.theme = theme;
    }
  }
});

export default useUserStore;