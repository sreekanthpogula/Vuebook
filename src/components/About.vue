<template>
  <v-main>
    <v-container>
      <h1>About Vuebook</h1>
      <router-link :to="{ name: 'error' }">Error</router-link>
      <v-container>
        <article>
          Vuebook is the Social-media Application designed using Vuejs Technology.It is
          similar to the Facebook Application in the Interface Design.We have used Vuetify
          for the Materialistic UI Component Design.The images shown on the recentphotos
          component are from the API.we can also know more about the image parameters on
          clicking the image.
        </article>
      </v-container>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "AboutVuebook",
};
</script>
