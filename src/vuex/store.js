import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

// the root, initial state object
const state = {
  news: {}
}


export default new Vuex.Store({
  actions
  getters,
  // modules: {}
})
