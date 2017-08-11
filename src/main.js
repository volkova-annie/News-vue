import Vue from 'vue'
import Vuex from 'vuex'
import store from './vuex/store'
import App from './components/App'


// Vue.config.productionTip = false

new Vue({
  el: '#root',
  template: '<App/>',
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
