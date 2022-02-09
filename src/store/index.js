import Vue from 'vue';
import Vuex from 'vuex';
import NewsHeadlineModule from './modules/NewsHeadlineModule';
import SourceModule from './modules/SourceModule';
import VisitedHeadlineModule from './modules/VisitedHeadlineModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    newsHeadlines: NewsHeadlineModule,
    sources: SourceModule,
    visitedHeadlines: VisitedHeadlineModule,
  },
});
