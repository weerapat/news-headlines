<template>
  <div>
    <v-breadcrumbs class="pl-0"
        large
        :items="[{text: 'Home', href: '/'}, {text: news.title}]"></v-breadcrumbs>
    <v-img
      v-if="news.urlToImage"
      :src="news.urlToImage"
      max-width="800px"
      class="mb-5"
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
      vm.$store.dispatch('visitedHeadlines/add', to.path);
    });
  },
  computed: {
    news() {
      return this.$store.state.newsHeadlines.data[this.$route.params.slug];
    },
  },
};
</script>
