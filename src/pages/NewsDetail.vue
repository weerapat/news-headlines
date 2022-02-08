<template>
  <v-container v-if="news">
    <v-row>
      <v-col cols="12">
        <div class="my-3">
          <router-link to="/">Home</router-link>
          /
          <span>{{ news.title }}</span>
        </div>
        <v-img
          v-if="news.urlToImage"
          :src="news.urlToImage"
          max-width="800px"
          class="mb-5"
        ></v-img>
        <h1>{{ news.title }}</h1>
        <p>{{ news.content }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'NewsDetail',
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$store.dispatch('visitedHeadlines/add', to.path);
    });
  },
  mounted() {
    this.$store.dispatch('newsHeadlines/get');
  },
  computed: {
    news() {
      return this.$store.state.newsHeadlines.data[this.$route.params.slug];
    },
  },
};
</script>
