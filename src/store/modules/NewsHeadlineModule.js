import axios from 'axios';
import { normalize, schema } from 'normalizr';
import { apiKey, baseUrl } from '../../config';
import { transformSlug } from '../../utils/string';

const NewsHeadlineModule = {
  namespaced: true,
  state: () => ({
    isLoading: false,
    isSuccess: false,
    data: {},
  }),
  mutations: {
    fetching(state) {
      state.isLoading = true;
      state.isSuccess = false;
    },
    fetchSuccess(state, params) {
      state.isLoading = false;
      state.data = params.data;
      state.isSuccess = true;
    },
    updateTitle(state, params) {
      state.data[params.slug].title = params.title;
    },
  },
  actions: {
    get({ commit }, search = null) {
      return new Promise((resolve, reject) => {
        commit('fetching');

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
            const normalizeData = normalize(newsHeadlines, [newsHeadlineSchema])
              .entities.newsHeadlines;

            commit('fetchSuccess', {
              data: normalizeData,
            });

            resolve(normalizeData);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    updateTitle({ commit }, params) {
      return commit('updateTitle', params);
    },
  },
  getters: {
    getBySource: (state) => (source) => {
      if (source) {
        return Object.values(state.data)
          .filter((newsHeadline) => newsHeadline.source.id === source);
      }

      return state.data;
    },
  },
};

export default NewsHeadlineModule;
