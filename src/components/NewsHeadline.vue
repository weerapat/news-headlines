<template>
  <v-card
    elevation="2"
    class="mb-5 mx-auto"
    max-width="450"
  >
    <router-link :to="{ name: 'Detail', params: { slug: newsHeadline.slug }}">
      <v-img
        height="200"
        :src="newsHeadline.urlToImage"
      ></v-img>
    </router-link>
    <v-card-title class="text-h d-inline-block py-2">
      {{ newsHeadline.title }}
      <v-btn
        x-small
        color="primary accent-4"
        @click="$emit('open-dialog', newsHeadline.slug, newsHeadline.title)"
      >
        edit
      </v-btn>
    </v-card-title>
    <v-card-subtitle class="mt-0 pb-1">
      <v-icon
        small
        color="grey darken-2"
      >
        mdi-calendar
      </v-icon>
      {{ new Date(newsHeadline.publishedAt).toLocaleDateString('en-US') }}
    </v-card-subtitle>
    <v-card-text>{{ newsHeadline.description }}</v-card-text>
    <v-card-actions>
      <router-link :to="{ name: 'Detail', params: { slug: newsHeadline.slug }}">
        <v-btn
          text
          color="primary accent-4"
          class="px-2"
          small
        >
          Read More
        </v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'NewsHeadline',
  props: ['newsHeadline'],
};
</script>
