import Vue from 'vue';
import Vuex from 'vuex';
import system from './modules/system';
import task from './modules/task';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    system,
    task,
  },
  
});

export const resetStore = () => {
  for (const key in store.state) {
    if (store.state.hasOwnProperty(key)) {
      store.dispatch(key + '/INIT');
    }
  }
};

export default store;