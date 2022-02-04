<template>
  <v-app>
    <v-navigation-drawer app>
      <div class="pa-4">
        <h2>Visited Headlines</h2>
        <ul>
          <li v-for="visitedHeadline in visitedHeadlines" :key="visitedHeadline">
            {{ visitedHeadline }}
          </li>
        </ul>
      </div>
    </v-navigation-drawer>
    <v-app-bar app>
      App bar
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-link to="/">Go to Home</router-link>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  computed: {
    visitedHeadlines() {
      return this.$store.state.visitedHeadlines;
    },
  },
};
</script>
