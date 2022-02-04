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
  },
};
</script>
