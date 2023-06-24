import { defineStore } from 'pinia'

const actionsApp = {
  animalGetList: 'animalGetList',
  animalGet: 'animalGet',
  animalPost: 'animalPost',
  animalPut: 'animalPut',
  animalDelete: 'animalDelete',
}

const useAppStore = defineStore('user', {
  state: () => {
    return {
      animalGetList: false,
      animalGet: false,
      animalPost: false,
      animalPut: false,
      animalDelete: false,
    }
  },
  getters: {
    isLoading: (state) => Object.values(state).some(f => f)
  },
  actions: {
    setPending(name, flag) {
      this[name] = flag;
    }
  }
});

export { actionsApp };
export default useAppStore;