<template>
  <v-container>
    <v-row>
      <v-col cols="4"
          v-for="newsHeadline in newsHeadlines" :key="newsHeadline.slug"
      >
        <v-card
          elevation="2"
          color="primary"
          class="mb-5"
        >
          <v-card-title>{{ newsHeadline.title }}</v-card-title>
          <v-card-text>{{ newsHeadline.description }}</v-card-text>
          <router-link :to="{ name: 'Detail', params: { slug: newsHeadline.slug }}">
            <v-btn
              text
              color="deep-purple accent-4"
            >
              Learn More
            </v-btn>
          </router-link>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'NewsHeadlines',

  mounted() {
    this.$store.dispatch('fetchNewsHeadlines');
  },
  computed: {
    newsHeadlines() {
      return this.$store.state.newsHeadlines;
    },
  },
};
</script>
