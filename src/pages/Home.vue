<template>
  <v-container>
    <v-row>
      <v-col v-if='sources.length' sm="6" md="4">
        <v-autocomplete
          v-model="filters.source"
          :items="sources"
          item-text="name"
          item-value="id"
          label="Sources"
          clearable
        ></v-autocomplete>
      </v-col>
      <v-col sm="6" md="4">
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
        <v-progress-circular
          indeterminate
          color="primary"></v-progress-circular>
        ..Loading
      </v-col>
      <v-col v-else cols="12" md="6" lg="4" xl="3"
         v-for="newsHeadline in filteredHeadlines" :key="newsHeadline.slug"
      >
        <news-headline @open-dialog="openDialog" :newsHeadline="newsHeadline" />
      </v-col>
    </v-row>

    <!-- Edit title form -->
    <v-dialog
      v-model="isDialogOpen"
      width="500"
    >
      <v-card>
        <v-card-title class="text-h6 primary darken-1 white--text">
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

    <v-snackbar
      v-model="snackbar.isOpen"
      timeout="5000"
      color="red darken-1"
    >
      {{ snackbar.text }}
    </v-snackbar>
  </v-container>
</template>

<script>
import debounce from 'lodash.debounce';
import NewsHeadline from '../components/NewsHeadline.vue';

export default {
  name: 'Home',
  components: {
    NewsHeadline,
  },
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
    snackbar: {
      isOpen: false,
      text: '',
    },
  }),
  mounted() {
    this.$store.dispatch('newsHeadlines/get')
      .catch((e) => {
        this.snackbar.isOpen = true;
        this.snackbar.text = e.response.data.message;
      });

    this.$store.dispatch('sources/get');
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
      this.$store.dispatch('newsHeadlines/updateTitle',
        {
          slug: this.form.headlineId, title: this.form.title,
        });
    },
    // eslint-disable-next-line func-names
    searchHeadlines: debounce(function (search) {
      this.$store.dispatch('newsHeadlines/get', search);
    }, 1000),
  },
  computed: {
    filteredHeadlines() {
      return this.$store.getters['newsHeadlines/getBySource'](this.filters.source);
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
