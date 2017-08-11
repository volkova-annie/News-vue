import Vue from 'vue'

export default {
    const apiKey = 'ca97653137944f2fac0abe57e6a6d7e0';
    const url = 'https://newsapi.org/v1/articles?source=hacker-news&apiKey='+apiKey;

        return Vue.http.get(url, request)

}
