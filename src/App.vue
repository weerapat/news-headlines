<template>
  <v-app>
    <v-navigation-drawer app>
      <div class="pa-4">
        <h2>Visited Headlines</h2>
        <ul>
          <li v-for="(visitedHeadline, index) in visitedHeadlines" :key="index + visitedHeadline">
            {{ visitedHeadline }}
          </li>
        </ul>
      </div>
    </v-navigation-drawer>
    <v-app-bar app class="text-h5">
      News
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

  computed: {
    visitedHeadlines() {
      return this.$store.state.visitedHeadlines.data;
    },
  },
};
</script>
