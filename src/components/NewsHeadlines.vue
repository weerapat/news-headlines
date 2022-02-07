<template>
  <v-container>
    <v-row>
      <v-col v-if='sources.length' cols="4">
        <v-select
          v-model="filters.source"
          :items="sources"
          item-text="name"
          item-value="id"
          label="Sources"
          clearable
        ></v-select>
      </v-col>
      <v-col cols="4">
        <v-text-field
          v-model="search"
          label="Search"
          clearable
          append-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-if='isHeadlinesLoading' cols="12">
        ..Loading
        <v-progress-circular
        indeterminate
        color="primary"></v-progress-circular>
      </v-col>
      <v-col v-else cols="4"
          v-for="newsHeadline in filteredHeadlines" :key="newsHeadline.slug"
      >
        <v-card
          elevation="2"
          color="primary"
          class="mb-5"
        >
          <v-card-title>{{ newsHeadline.title }}</v-card-title>
          <v-card-text>{{ newsHeadline.description }}</v-card-text>
          <router-link :to="{ name: 'Detail', params: { slug: newsHeadline.slug }}">
            <v-btn
              text
              color="deep-purple accent-4"
            >
              Learn More
            </v-btn>
          </router-link>
          <v-btn
            text
            color="white accent-4"
            @click="openDialog(newsHeadline.slug, newsHeadline.title)"
          >
            edit
          </v-btn>
        </v-card>
      </v-col>
    </v-row>

    <!-- Edit title form -->
    <v-dialog
      v-model="isDialogOpen"
      width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Edit Title
        </v-card-title>

        <v-form
          ref="form"
          v-model="form.isValid"
          lazy-validation
        >
          <v-card-text>
            <v-text-field
              label="News Title*"
              v-model="form.title"
              :counter="150"
              :rules="validations.title"
              required
            ></v-text-field>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="isDialogOpen = false"
            >
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="updateTitle"
              :disabled="!form.isValid"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import debounce from 'lodash.debounce';

export default {
  name: 'NewsHeadlines',
  data: () => ({
    isDialogOpen: false,
    search: '',
    filters: {
      source: null,
    },
    form: {
      isValid: false,
      headlineId: null,
      title: '',
    },
    validations: {
      title: [
        (v) => !!v || 'Title is required',
        (v) => (v && v.length <= 150) || 'Title must be less than 150 characters',
      ],
    },
  }),
  mounted() {
    this.$store.dispatch('fetchNewsHeadlines');
    this.$store.dispatch('fetchSources');
  },
  methods: {
    /**
     * Open Dialog for editing news headline title
     * @param slug
     * @param title
     */
    openDialog(slug, title) {
      this.isDialogOpen = true;
      this.form.headlineId = slug;
      this.form.title = title;
    },

    /**
     * Update title of headline
     */
    updateTitle() {
      this.isDialogOpen = false;
      this.$store.dispatch('updateNewsHeadlineTitle',
        {
          slug: this.form.headlineId, title: this.form.title,
        });
    },
    // eslint-disable-next-line func-names
    searchHeadlines: debounce(function (search) {
      this.$store.dispatch('fetchNewsHeadlines', search);
    }, 1000),
  },
  computed: {
    filteredHeadlines() {
      return this.$store.getters.getNewsHeadlinesBySource(this.filters.source);
    },
    isHeadlinesLoading() {
      return this.$store.state.newsHeadlines.isLoading;
    },
    sources() {
      return this.$store.state.sources.data;
    },
  },
  watch: {
    search(val) {
      this.searchHeadlines(val);
    },
  },
};
</script>
