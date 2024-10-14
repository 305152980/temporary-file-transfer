import Storage from '@/utils/storage.js'

const TokenKey = 'User-Token'

export function getToken() {
  return Storage.getItem(TokenKey)
}

export function setToken(token) {
  return Storage.setItem(TokenKey, token)
}

export function removeToken() {
  return Storage.removeItem(TokenKey)
}

const LanguageKey = 'User-Language'

export function getLanguage() {
  return Storage.getItem(LanguageKey)
}

export function setLanguage(language) {
  return Storage.setItem(LanguageKey, language)
}

export function removeLanguage() {
  return Storage.removeItem(LanguageKey)
}
