import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    dogimages: '',

  },
  getters: {
    loadImage(state) {
       return state.images
    }
  },
  mutations: {
    getCatImage(state, randomImage) {
     state.images = randomImage
    },
    getDogImage(state, randomImage) {
      state.images = randomImage
     },
  },
  actions: {
    getCatImage({ commit }) {
      console.log('getCatImage(action)')
      axios.get('https://pixabay.com/api/?key=30231407-63b59e473c794efcc287ff34f&q=yellow+flowers&image_type=photo')
      .then(response => {
        commit('getCatImage', response.data)
      })
    },
    getDogImage({ commit }) {
      console.log('getDogImage(action)')
      axios.get('https://pixabay.com/api/?key=30231407-63b59e473c794efcc287ff34f&q=yellow+flowers&image_type=photo')
      .then(response => {
        commit('getDogImage', response.data)
        
      })
    },

  },
  modules: {
  }
})
export default store

// 30231407-63b59e473c794efcc287ff34f