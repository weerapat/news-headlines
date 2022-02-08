<template>
  <v-app>
    <v-navigation-drawer
      class="indigo darken-4 white--text"
      v-model="isDrawerOpen"
      right
      app
    >
      <div class="pa-4">
        <h2>Visited Headlines</h2>
        <ul>
          <li v-for="(visitedHeadline, index) in visitedHeadlines" :key="index + visitedHeadline">
            {{ visitedHeadline }}
          </li>
        </ul>
      </div>
    </v-navigation-drawer>
    <v-app-bar app dense class="text-h5 grey lighten-2">
      News
      <v-app-bar-nav-icon
        fixed
        right
        @click.stop="isDrawerOpen = !isDrawerOpen"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main class="blue-grey lighten-5">
      <!-- Provides the application the proper gutter -->
      <v-container>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    isDrawerOpen: true,
  }),
  computed: {
    visitedHeadlines() {
      return this.$store.state.visitedHeadlines.data;
    },
  },
};
</script>
