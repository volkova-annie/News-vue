<template>
  <div class='sort'>
    <label>Sort by: </label>
      <select v-on:change='sortNews'>
        <option selected value=''>---</option>
        <option value='publishedAt'>Date</option>
        <option value='title'>Title</option>
        <option value='author'>Author</option>
      </select>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  methods: {
    // ...mapActions([
    //   'sortNews'
    // ])
    sortNews(event) {

      return this.$store.dispatch('sortNews', event)
    }
  }
}
</script>

<style>
.sort {
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  position: fixed;
  top: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: white;
}
select {
  margin-left: 10px;
  width: 400px;
  outline: none;
}
</style>
