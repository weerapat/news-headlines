import axios from 'axios';
import { apiKey, baseUrl } from '../../config';

const SourceModule = {
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
  },
  actions: {
    get({ commit }) {
      commit('fetching');

      axios
        .get(`${baseUrl}/sources?apiKey=${apiKey}`)
        .then((response) => {
          const { data } = response;
          commit('fetchSuccess', {
            data: data.sources,
          });
        });
    },
  },
};

export default SourceModule;
