import cookieparser from 'cookieparser'

export const actions = {
  async nuxtServerInit ({ dispatch }, { req }) {
    let user = null
    let token = null
    if (req && req.headers && req.headers.cookie) {
      const parsed = await cookieparser.parse(req.headers.cookie)
      user = (parsed.user && JSON.parse(parsed.user)) || null
      token = (parsed.token && JSON.parse(parsed.token)) || null
    }
    await dispatch('auth/setUser', user)
    await dispatch('auth/setToken', token)
  }
}
