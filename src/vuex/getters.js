export const news = state => [].concat(state.news)
export const count = state => state.news ? `${state.news.length}` : '0'
