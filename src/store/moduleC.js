
const moduleC = {
    state: {
        user: {
            name: ''
        }
    },

    getters: {
        user(state) {
            return state.user
        }
    },

    actions: {
        updateuser(context, data) {
            context.commit('updateuser', data)
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