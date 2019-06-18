export default {
    state: {
        alcohol: undefined,
        alcohols: [],
        soft: undefined,
        softs: []
    },
    mutations: {
        setAlcohol (state, alcohol) {
            state.alcohol = alcohol
        },
        setAlcohols (state, alcohols) {
            state.alcohols = alcohols
        },
        setSoft (state, soft) {
            state.soft = soft
        },
        setSofts (state, softs) {
            state.softs = softs
        }
    },
    actions: {
        loadAlcohols (context) {
            axios.get('/alcohols').then(res => {
                context.commit('setAlcohols', res.data)
            })
        },
        loadSofts (context) {
            axios.get('/softs').then(res => {
                context.commit('setSofts', res.data)
            })
        },
        sendToRobot ({state}) {
            return axios.post('/order/post', {
                alcohol: state.alcohol,
                soft: state.soft
            })
        }
    },
    getters: {
        alcohol: state => {
            return state.alcohol
        },
        alcohols: state => {
            return state.alcohols
        },
        soft: state => {
            return state.soft
        },
        softs: state => {
            return state.softs
        }
    }
}