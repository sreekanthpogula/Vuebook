import axios from "axios"

const moduleA = {
    namespaced: true,
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
            commit('setImageData', response.data.hits)
            console.log('response', response.data)
          })
          .catch(err=> {
            console.log(err)
        })
        },
        getSingleImages({ commit }, id) {
          axios.get('https://pixabay.com/api/?key=30231407-63b59e473c794efcc287ff34f&q=yellow+flowers&image_type=photo' + id)
          .then(response => {
            commit('setSingleImageData', response.data)
            console.log('response', response.data)
          })
          .catch(err=> {
            console.log(err)
        })
        },
      },
    }
    export default moduleA
    
    
  