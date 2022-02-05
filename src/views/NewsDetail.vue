<template>
  <div>
    <router-link to="/">Go to Home</router-link>
    <v-col v-if='isLoading'>
      ..Loading
      <v-progress-circular
        indeterminate
        color="primary"></v-progress-circular>
    </v-col>
    <div v-else>
      <v-img
        :src="news.urlToImage"
        max-width="500"
      ></v-img>
      <h1>{{ news.title }}</h1>
      <p>{{ news.content }}</p>
    </div>
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
