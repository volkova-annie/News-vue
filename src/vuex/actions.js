// import api from './utils/api.js'
import * as types from './mutation-types'

const actions = {
  updateNews ({commit}, news) => {
    commit(types.UPDATE_NEWS),
    news: news
    }
  }
// https://newsapi.org/v1/articles?source=hacker-news&apiKey=ca97653137944f2fac0abe57e6a6d7e0

  requestNews (context) => {
    const apiKey = 'ca97653137944f2fac0abe57e6a6d7e0';
    const url = 'https://newsapi.org/v1/articles?source=hacker-news&apiKey='+apiKey;
    return Vue.http.get(url, request)
      .then(response => response.json())
      .catch(error => {
        console.error(error);
      })
  }
}
export default actions
