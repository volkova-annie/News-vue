import Vue from 'vue'
import Vuex from 'vuex'
import store from './vuex/store'
import App from './components/App'

new Vue({
  el: '#root',
  template: '<app></app>',
  store,
  components: { App },
  methods: {
    // sortNews() {
    //   this.$store.dispatch('sortNews')
    // },
    // deleteNews() {
    //   this.$store.dispatch('seleteNews')
    // }
  }
})
