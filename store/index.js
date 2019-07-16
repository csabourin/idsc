export const state = () => ({
  lang: `en`
})

export const mutations = {
  switchLang(state) {
    switch (state.lang) {
      case `en`:
        state.lang = `fr`
        break
      case `fr`:
        state.lang = `en`
        break
    }
  }
}
