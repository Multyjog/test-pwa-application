import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    officeWrapperAvailable: false
  },
  mutations: {
    changeOfficeWrapperAvailable: function(state, payload){
      state.officeWrapperAvailable = payload
    }
  },
  actions: {

  }
})
