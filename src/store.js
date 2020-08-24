import Vue from 'vue'
import Vuex from 'vuex'
import { saveStatePlugin } from './utils'

import state from './store/state'
import getters from './store/getters'
import mutations from './store/mutations'
import actions from './store/actions'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: { ...state },
  mutations: { ...mutations },
  getters: { ...getters },
  actions: { ...actions }
})
