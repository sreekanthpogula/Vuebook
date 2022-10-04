import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    imageData: null,
    singleimageData: null,
  },
  getters: {
    images(state) {
       return state.imageData?.hits
    },
    singleimage(state) {
      return state.singleimageData
    }
  },
  mutations: {
    setImageData(state, data) {
     state.imageData = data
    },
    setsingleImageData(state, data) {
      state.singleimageData = data
    }
  },
  actions: {
    getImages({ commit }) {
      axios.get('https://pixabay.com/api/?key=30231407-63b59e473c794efcc287ff34f&q=yellow+flowers&image_type=photo')
      .then(response => {
        commit('setImageData', response.data)
        console.log('response', response.data)
      })
    },
    getsingleImages({ commit }) {
      axios.get('https://pixabay.com/api/?key=30231407-63b59e473c794efcc287ff34f&q=yellow+flowers&image_type=photo' + this.id)
      .then(response => {
        commit('setsingleImageData', response.data)
        console.log('response', response.data)
      })
    },
  },
  modules: {
  }
})
export default store

// 30231407-63b59e473c794efcc287ff34f