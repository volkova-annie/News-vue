// export const news = (state, getters) => (key) => {
//   console.log(key);
//   if (key === 'title') {
//     return state.news.sort((a, b) => {
//       return a.title.localeCompare(b.title)
//       // return a.title - b.title;
//     })
//   }
//
//   if (key === 'date') {
//     return state.news.sort((a, b) => {
//       return a - b;
//     })
//   }
//
//   return state.news
// }
// export const news = state => {
//   return [].concat(state.news)
// }

// export const news = state => state.news

export const news = (state, getters) => {
  // console.log(key)
  return state.news
}

// export const count = state => state.news ? `${state.news.length}` : '0'
