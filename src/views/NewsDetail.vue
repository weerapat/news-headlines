<template>
  <div>
    <router-link to="/">Go to Home</router-link>
    <v-img
      v-if="news.urlToImage"
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
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$store.dispatch('addVisitedHeadline', to.path);
    });
  },
  mounted() {
    this.$store.dispatch('fetchNewsHeadlines');
  },
  computed: {
    news() {
      return this.$store.state.newsHeadlines.data[this.$route.params.slug];
    },
    isLoading() {
      return this.$store.state.newsHeadlines.isLoading;
    },
  },
};
</script>
