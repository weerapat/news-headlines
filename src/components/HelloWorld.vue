<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        Hello
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-card
          elevation="2"
        >
          <router-link to="/detail">
            <v-btn
              text
              color="deep-purple accent-4"
            >
              Learn More
            </v-btn>
          </router-link>
          <v-card-title>Cafe Badilico</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card
          elevation="2"
        >Head line</v-card>
      </v-col>
      <v-col cols="4">
        <v-card
          elevation="2"
        >Head line</v-card>
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify',
      },
    ],
  }),
};
</script>
