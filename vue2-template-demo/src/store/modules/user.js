import { loginPort, logoutPort, getInfoPort } from '@/apis/user/index.js'
import { getToken, setToken, removeToken, removeLanguage } from '@/utils/auth.js'
import { resetRouter } from '@/router/index.js'

const state = {
  token: getToken(), // 初始值为 null。
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
    const { data } = await loginPort({ username: username.trim(), password: password })
    commit('SET_TOKEN', data.token)
    setToken(data.token)
  },

  // get user info
  async getInfo({ commit, state }) {
    const { data } = await getInfoPort(state.token)

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
    await logoutPort(state.token)
    commit('SET_TOKEN', '')
    commit('SET_ROLES', [])
    commit('language/SET_LANGUAGE', process.env.VUE_APP_Language || null, { root: true })
    removeToken()
    removeLanguage()
    resetRouter()
  },

  // remove token
  async resetToken({ commit }) {
    commit('SET_TOKEN', '')
    removeToken()
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
