<template>
  <li id='newsItem' >
    <a class='article-url' v-bind:href='item.url'>
      <div class='article-image'><img v-bind:src='item.urlToImage'/></div>
      <div class='article-title'>Title: {{item.title}}</div>
      <div class='article-title' v-if='item.author'> Author: {{item.author}}</div>
      <div class='article-date' v-if='item.publishedAt'> Date: {{item.publishedAt.toLocaleDateString('ru')}}</div>
    </a>
    <button class='article-delete' v-on:click='deleteOneNews(item.url)'>
      &times;
    </button>
  </li>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  props: ['item'],
  methods: {
    ...mapActions([
      'deleteOneNews'
    ])
    // deleteOneNews(url) {
    //   this.$store.dispatch('deleteOneNews', url)
    // }
  }
}
</script>

<style>
  #newsItem {
    border-bottom: 1px solid #ededed;
    display: flex;
    justify-content: space-between;
  }
  .article-delete {
    margin-top: 10px;
    position: relative;
    display: block;
    border-width: 0;
    padding: 0;
    height:15px;
    width:15px;
    border-radius: 2px;
    outline: none;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
    background-color: #cc7a6f;
    color: #ecf0f1;
    transition: background-color .5s;
    overflow: hidden;
  }
  .article-image > img {
    max-width: 200px;
  }
  .article-url {
    text-decoration: none;
    color: #000000;
  }
</style>
