<template>
  <ul id='newsList'>
    <news-item v-for='item in news' v-bind:item='item'></news-item>
  </ul>
</template>

<script>
import NewsItem from './NewsItem.vue'
import {mapGetters} from 'vuex'

export default {
  computed: {
  //   news() {
  //   return this.$store.getters.news('title')
  // }

    ...mapGetters(['news'])
  },
  components: {
    NewsItem
  }
}
</script>

<style>
  #newsList {
    margin: 0 auto;
    list-style: none;
    margin-top: 40px;
    width: 768px;
    padding-left: 40px;
    padding-right: 40px;
  }
</style>
