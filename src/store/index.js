import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { createStore } from 'vuex'

Vue.use(Vuex)

export default createStore({
  state: {
    images: ''
  },
  getters: {
    loadImage(state) {
      return state.images 
    }
  },
  mutations: {
    newImage(state, randomImage) {
      state.images = randomImage
    }
  },
  actions: {
    getImage({ commit }) {
      console.log('getImage(action)')
      axios('https://picsum.photos/200')
      .then(response => {
        commit('getImage', response.data)
      })
    },
  },
  modules: {
  }
})
