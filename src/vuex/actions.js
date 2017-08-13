export function updateNews({commit},  news) {
  commit('UPDATE_NEWS', news)
}

// https://newsapi.org/v1/articles?source=hacker-news&apiKey=ca97653137944f2fac0abe57e6a6d7e0

export function requestNews({dispatch}) {
  const apiKey = 'ca97653137944f2fac0abe57e6a6d7e0';
  const url = 'https://newsapi.org/v1/articles?source=hacker-news&apiKey='+apiKey;
  return fetch(url)
    .then(response => response.json())
    .then(response => dispatch('updateNews', response.articles))
    .catch(error => {
      console.error(error);
    })
}

export function deleteOneNews({dispatch, getters}, url) {
  console.log(url);
  // const news = getters.news
  // const filteredNews = news.filter(item => item.url !== url);
  //
  // dispatch('updateNews', filteredNews)
}

export function sortNews ({}) {

}
