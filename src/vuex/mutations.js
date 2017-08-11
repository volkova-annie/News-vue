import * as types from './mutation-types'

const mutations = {
  types.UPDATE_NEWS(state, news) {
    state.news = news
  },
  types.REQUEST_NEWS(state) {},
  types.SORT_NEWS(state, news){},
  types.DELETE_NEWS(state, news) {},
}

export default mutations
