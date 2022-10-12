import Vue from 'vue'
import Vuex from 'vuex'
 import axios from 'axios'

Vue.use(Vuex)
// const adminModule = {
//   state: {
//     userType: 'Super Admin'
//   }
// }
const store = new Vuex.Store({
  state: {
    imageData: null,
    singleimageData: null,
  },
  getters: {
    images(state) {
       return state.imageData?.hits
    },
    singleImage(state) {
      return state.singleimageData
    }
  },
  mutations: {
    setImageData(state, data) {
     state.imageData = data
    },
    setSingleImageData(state, data) {
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
    getSingleImages({ commit }) {
      axios.get('https://pixabay.com/api/?key=30231407-63b59e473c794efcc287ff34f&q=yellow+flowers&image_type=photo' + this.id)
      .then(response => {
        commit('setSingleImageData', response.data)
        console.log('response', response.data)
      })
    },
  },
  modules: {
  }
})
export default store

// 30231407-63b59e473c794efcc287ff34f

// const moduleA = {
//   state: () => ({ imageData: null,    singleimageData: null, }),
//   getters: {
//         images(state) {
//            return state.imageData?.hits
//         },
//         singleImage(state) {
//           return state.singleimageData
//         }
//       },
//       mutations: {
//         setImageData(state, data) {
//          state.imageData = data
//         },
//         setSingleImageData(state, data) {
//           state.singleimageData = data
//         }
//       },
//       // actions: {
//       //   getImages({ commit }) {
//       //     axios.get('https://pixabay.com/api/?key=30231407-63b59e473c794efcc287ff34f&q=yellow+flowers&image_type=photo')
//       //     .then(response => {
//       //       commit('setImageData', response.data)
//       //       console.log('response', response.data)
//       //     })
//       //   },
//       //   getSingleImages({ commit }) {
//       //     axios.get('https://pixabay.com/api/?key=30231407-63b59e473c794efcc287ff34f&q=yellow+flowers&image_type=photo' + this.id)
//       //     .then(response => {
//       //       commit('setSingleImageData', response.data)
//       //       console.log('response', response.data)
//       //     })
//       //   },
//       // },
// }

// // const moduleB = {
// //   state: () => ({ ... }),
// //   mutations: { ... },
// //   actions: { ... }
// // }

// const store = new Vuex.Store({
//   modules: {
//     a: moduleA,
//     // b: moduleB
//   }
// })

// store.state.a // -> `moduleA`'s state
// // store.state.b 
// export default store