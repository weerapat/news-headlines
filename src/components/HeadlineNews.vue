<template>
  <v-container>
    <v-row>
      <v-col cols="4"
          v-for="article in articles" :key="article.title"
      >
        <v-card
          elevation="2"
          color="primary"
          class="mb-5"
        >
          <v-card-title>{{ article.title }}</v-card-title>
          <v-card-text>{{ article.description }}</v-card-text>
          <router-link to="/detail">
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
import axios from 'axios';
import { transformSlug } from '../utils/string';

export default {
  name: 'News',

  mounted() {
    axios
      .get('https://newsapi.org/v2/top-headlines?country=us&apiKey=099148be22804e849a0c6fe022b7cf5e')
      .then((response) => {
        const { data } = response;

        this.articles = data.articles.map((article) => ({
          ...article,
          slug: transformSlug(article.title),
        }));
      });
  },

  data: () => ({
    articles: [],
  }),
};
</script>
