// export function updateNews({commit},  news) {
//
//   commit('UPDATE_NEWS', news)
// }

export function requestNews({commit}) {
  const apiKey = 'ca97653137944f2fac0abe57e6a6d7e0';
  const url = 'https://newsapi.org/v1/articles?source=hacker-news&apiKey='+apiKey;
  return fetch(url)
    .then(response => response.json())
    .then(response => response.articles.map(item => {
      if (item.publishedAt) item.publishedAt = new Date(item.publishedAt)
      return item
    }))
    .then(response => commit('UPDATE_NEWS', response))
    .catch(error => {
      console.error(error);
    })
}

export function deleteOneNews({getters, commit}, url) {
  const news = getters.news
  const filteredNews = news.filter(item => item.url !== url);
  commit('UPDATE_NEWS', filteredNews)
}

export function sortNews ({getters, commit}, event) {
  const sorter = event.target.value
  const news = getters.news

  function localeCompare(a, b) {
    return  a.localeCompare(b)
  }

  // news.localeCompare(a, b)

//  news.sort((a, b) => {
//   return a.localeCompare(b)
// })

  news.sort((a, b) => {
    const x = a[sorter] || "";
    const y = b[sorter] || "";
    if (x < y) return -1;
    if (x > y) return 1;
    return 0;
  })
  commit('UPDATE_NEWS', news)
}
