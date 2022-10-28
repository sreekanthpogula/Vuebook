
const moduleC = {
    state: {
        user: null,
    },

    getters: {
        user(state) {
            return state.user
        }
    },

    actions: {
        updateuser({ commit }, data) {
            commit('updateuser', data)
            console.log("updateduser");
        }
        
    },

    mutations: {
        updateuser(state, data) {
            state.user = data
        }
    }
}

export default moduleC