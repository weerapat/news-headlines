<template>
  <v-container>
    <v-row>
      <v-col v-if='sources.length' cols="12">
        Filter
        <v-select
          v-model="filterSource"
          :items="sources"
          item-text="name"
          item-value="id"
          label="Sources"
          clearable
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-if='isNewsHeadlinesLoading' cols="12">
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

    <!-- Editing title form -->
    <v-dialog
      v-model="dialog"
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
              v-model="form.editTitle"
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
              @click="dialog = false"
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
export default {
  name: 'NewsHeadlines',
  data: () => ({
    dialog: false,
    filterSource: null,
    form: {
      isValid: false,
      headlineId: null,
      editTitle: '',
    },
    validations: {
      title: [
        (v) => !!v || 'Title is required',
        (v) => (v && v.length <= 150) || 'Title must be less than 150 characters',
      ],
    },
  }),
  methods: {
    /**
     * Open Dialog for editing news headline title
     * @param slug
     * @param title
     */
    openDialog(slug, title) {
      this.dialog = true;
      this.form.headlineId = slug;
      this.form.editTitle = title;
    },
    updateTitle() {
      this.dialog = false;
      this.$store.dispatch('updateNewsHeadline',
        {
          slug: this.form.headlineId, title: this.form.editTitle,
        });
    },
  },
  mounted() {
    this.$store.dispatch('fetchNewsHeadlines');
    this.$store.dispatch('fetchSources');
  },
  computed: {
    newsHeadlines() {
      return this.$store.state.newsHeadlines.data;
    },
    isNewsHeadlinesLoading() {
      return this.$store.state.newsHeadlines.isLoading;
    },
    sources() {
      return this.$store.state.sources.data;
    },
    filteredHeadlines() {
      console.log(this.filterSource);
      return this.$store.getters.getNewsHeadlinesBySource(this.filterSource);
    },
  },
};
</script>
