<template>
  <div class="about">
    <v-img
      :src="news.urlToImage"
      max-width="500"
    ></v-img>
    <h1>{{ news.title }}</h1>
    <p>{{ news.content }}</p>
  </div>
</template>

<script>
export default {
  name: 'NewsDetail',

  mounted() {
    this.$store.dispatch('fetchNewsHeadlines');
  },
  computed: {
    news() {
      return this.$store.state.newsHeadlines.data[this.$route.params.slug];
    },
  },
};
</script>
