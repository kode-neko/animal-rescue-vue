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
  actions: {
    setPending(name, flag) {
      this.state[name] = flag;
    }
  }
});

export { actionsApp };
export default useAppStore;