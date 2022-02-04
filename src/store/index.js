import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { normalize, schema } from 'normalizr';
import { transformSlug } from '../utils/string';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newsHeadlines: {
      isLoading: false,
      data: {},
    },
    visitedHeadlines: [],
  },
  mutations: {
    updateNewsHeadlines(state, newsHeadlines) {
      state.newsHeadlines.data = newsHeadlines;
    },
    isNewsHeadlinesLoading(state, loadingStatus) {
      state.newsHeadlines.isLoading = loadingStatus;
    },
    updateNewsHeadline(state, params) {
      state.newsHeadlines.data[params.slug].title = params.title;
    },
    addVisitedHeadline(state, headline) {
      state.visitedHeadlines.push(headline);
    },
  },
  actions: {
    fetchNewsHeadlines({ commit }) {
      commit('isNewsHeadlinesLoading', true);
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
          commit('isNewsHeadlinesLoading', false);
        });
    },
    updateNewsHeadline({ commit }, params) {
      return commit('updateNewsHeadline', params);
    },
    addVisitedHeadline({ commit }, headline) {
      return commit('addVisitedHeadline', headline);
    },
  },
  modules: {
  },
});
