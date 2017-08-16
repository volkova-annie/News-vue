<template>
  <div id='app'>
    <sort></sort>
    <news-list></news-list>
  </div>
</template>

<script>
import NewsList from './NewsList.vue';
import Sort from './Sort';
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'app',
  methods: {
    ...mapActions([
      'updateNews',
      'requestNews',
      'sortNews'
    ])
  },
  mounted: function () {
    this.requestNews()
  },
  components: {
    NewsList,
    Sort
  },
  computed: {
    ...mapGetters([
      'news'
    ])
  },
}
</script>

<style>
.app {
  min-width: 768px;
  padding-left: 40px;
  padding-right: 40px;
}

</style>
