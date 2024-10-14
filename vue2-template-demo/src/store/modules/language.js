import { getLanguage } from '@/utils/auth.js'

const state = {
  // 初始值为 process.env.VUE_APP_Language || null。
  language: getLanguage() || process.env.VUE_APP_Language || null
}

const mutations = {
  SET_LANGUAGE: (state, language) => {
    state.language = language
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
