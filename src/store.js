import Vue from 'vue'
import Vuex from 'vuex'
import { saveStatePlugin } from './utils'

import state from './store/state'
import getters from './store/getters'
import mutations from './store/mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: { ...state },
  mutations: { ...mutations },
  getters: { ...getters },

  actions: {
    createTaskAction ({ commit }, { tasks, name }) {
      commit('CREATE_TASK', { tasks, name });
    },

    createColumnAction ({ commit }, { name }) {
      commit('CREATE_COLUMN', { name });
    },
    updateTaskAction ({ commit }, { data }) {
      const { task, key, value } = data;
      commit('UPDATE_TASK', { task, key, value });
    },
    removeTaskAction ({ commit }, { task }) {
      commit('REMOVE_TASK', { task })
    }
  }
})
