import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { normalize, schema } from 'normalizr';
import { transformSlug } from '../utils/string';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newsHeadlines: [],
  },
  mutations: {
    updateNewsHeadlines(state, newsHeadlines) {
      state.newsHeadlines = newsHeadlines;
    },
  },
  actions: {
    fetchNewsHeadlines({ commit }) {
      axios
        .get('https://newsapi.org/v2/top-headlines?country=us&apiKey=099148be22804e849a0c6fe022b7cf5e')
        .then((response) => {
          const { data } = response;
          const newsHeadlines = data.articles.map((newsHeadline) => ({
            ...newsHeadline,
            slug: transformSlug(newsHeadline.title),
          }));

          // Define a newsHeadlines schema
          const newsHeadlineSchema = new schema.Entity('newsHeadlines', undefined, { idAttribute: 'slug' });

          commit('updateNewsHeadlines', normalize(newsHeadlines, [newsHeadlineSchema]).entities.newsHeadlines);
        });
    },
  },
  modules: {
  },
});
