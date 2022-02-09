const VisitedHeadlineModule = {
  namespaced: true,
  state: () => ({
    data: [],
  }),
  mutations: {
    add(state, headline) {
      state.data.push(headline);
    },
  },
  actions: {
    add({ commit }, headline) {
      return commit('add', headline);
    },
  },
};

export default VisitedHeadlineModule;
