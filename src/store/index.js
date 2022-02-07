import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { normalize, schema } from 'normalizr';
import { transformSlug } from '../utils/string';
import { apiKey, baseUrl } from '../config';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newsHeadlines: {
      isLoading: false,
      data: {},
    },
    sources: {
      isLoading: false,
      data: {},
    },
    visitedHeadlines: [],
  },
  mutations: {
    updateNewsHeadlines(state, newsHeadlines) {
      state.newsHeadlines.data = newsHeadlines;
    },
    updateNewsHeadlinesLoading(state, loadingStatus) {
      state.newsHeadlines.isLoading = loadingStatus;
    },
    updateNewsHeadlineTitle(state, params) {
      state.newsHeadlines.data[params.slug].title = params.title;
    },
    updateSources(state, sources) {
      state.sources.data = sources;
    },
    updateSourcesLoading(state, loadingStatus) {
      state.sources.isLoading = loadingStatus;
    },
    addVisitedHeadline(state, headline) {
      state.visitedHeadlines.push(headline);
    },
  },
  actions: {
    fetchSources({ commit }) {
      commit('updateSourcesLoading', true);
      axios
        .get(`${baseUrl}/sources?apiKey=${apiKey}`)
        .then((response) => {
          const { data } = response;
          commit('updateSources', data.sources);
          commit('updateSourcesLoading', false);
        });
    },
    fetchNewsHeadlines({ commit }, search = null) {
      commit('updateNewsHeadlinesLoading', true);
      const queryParam = search ? `q=${encodeURI(search)}` : 'country=us';

      axios
        .get(`${baseUrl}/top-headlines?${queryParam}&apiKey=${apiKey}`)
        .then((response) => {
          const { data } = response;
          const newsHeadlines = data.articles.map((newsHeadline) => ({
            ...newsHeadline,
            slug: transformSlug(newsHeadline.title),
          }));

          // Define a newsHeadlines schema
          const newsHeadlineSchema = new schema.Entity('newsHeadlines', undefined, { idAttribute: 'slug' });

          commit('updateNewsHeadlines', normalize(newsHeadlines, [newsHeadlineSchema]).entities.newsHeadlines);
          commit('updateNewsHeadlinesLoading', false);
        });
    },
    updateNewsHeadlineTitle({ commit }, params) {
      return commit('updateNewsHeadlineTitle', params);
    },
    addVisitedHeadline({ commit }, headline) {
      return commit('addVisitedHeadline', headline);
    },
  },
  getters: {
    getNewsHeadlinesBySource: (state) => (source) => {
      if (source) {
        return Object.values(state.newsHeadlines.data)
          .filter((newsHeadline) => newsHeadline.source.id === source);
      }

      return state.newsHeadlines.data;
    },
  },
});
