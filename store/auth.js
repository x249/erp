import Cookies from 'js-cookie'

export const state = () => { }

export const mutations = {
  setUser (state, user) {
    state.user = user
    Cookies.set('user', user)
  },
  setToken (state, token) {
    state.token = token
    Cookies.set('token', token)
  },
  logout (state) {
    state.user = null
    state.token = null
    Cookies.remove('user')
    Cookies.remove('token')
  }
}

export const actions = {
  setUser: async ({ commit }, user) => {
    await commit('setUser', user)
  },
  setToken: async ({ commit }, token) => {
    await commit('setToken', token)
  }
}

export const getters = {
  user: (state) => {
    return state.user
  },
  token: (state) => {
    return state.token
  }
}
