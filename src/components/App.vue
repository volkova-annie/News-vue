<template>
  <div id="app">
    <span>{{count}}</span>
    <p>Hello</p>
    <!-- <sort></sort> -->
    <!-- <news-list></news-list> -->
    <!-- <news-item v-for="item in news"></news-item> -->
  </div>
</template>

<script>
import NewsList from './NewsList.vue';
// import Sort from './Sort';
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'app',
  methods: mapActions([
    'updateNews',
    'requestNews',
  ]),
  mounted: function () {
    this.requestNews()
  },
  components: {
    NewsList,
    // Sort
  },
  computed: {
    ...mapGetters([
      'news',
      'count'
    ])
  },
}
</script>

<style>
</style>
