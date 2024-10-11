import { login, logout, getInfo } from '@/apis/user/index.js'
import { getToken, setToken, removeToken } from '@/utils/auth.js'
import { resetRouter } from '@/router/index.js'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // user login
  async login({ commit }, userInfo) {
    const { username, password } = userInfo
    const { data } = await login({ username: username.trim(), password: password })
    commit('SET_TOKEN', data.token)
    setToken(data.token)
  },

  // get user info
  async getInfo({ commit, state }) {
    const { data } = await getInfo(state.token)

    if (!data) {
      throw new Error('Verification failed, please Login again.')
    }

    const { roles, name, avatar, introduction } = data

    // roles must be a non-empty array
    if (!roles || roles.length <= 0) {
      throw new Error('Verification failed, please Login again.')
    }

    commit('SET_ROLES', roles)
    commit('SET_NAME', name)
    commit('SET_AVATAR', avatar)
    commit('SET_INTRODUCTION', introduction)
    return data
  },

  // user logout
  async logout({ commit, state }) {
    await logout(state.token)
    commit('SET_TOKEN', '')
    commit('SET_ROLES', [])
    removeToken()
    resetRouter()
  },

  // remove token
  async resetToken({ commit }) {
    commit('SET_TOKEN', '')
    commit('SET_ROLES', [])
    removeToken()
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
