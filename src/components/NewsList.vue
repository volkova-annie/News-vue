<template>
  <ul id="newsList">
    <!-- <news-item v-for="item in news"></news-item> -->
  </ul>
</template>

<script>
import NewsItem from './NewsItem.vue'
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['news'])
  },
  components: {
    NewsItem,
    // Sort
  }
}
</script>
