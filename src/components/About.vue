<template>
  <v-main>
    <v-container>
      <h1>About Vuebook</h1>
      <!-- <router-link :to="{ name: 'error' }">Error</router-link> -->
      <v-container>
        <article>
          Vuebook is the Social-media Application designed using Vuejs Technology.It is
          similar to the Facebook Application in the Interface Design.We have used Vuetify
          for the Materialistic UI Component Design.The images shown on the recentphotos
          component are from the API.we can also know more about the image parameters on
          clicking the image.
        </article>
        <div class="frame">
          <slot>This is a default slot content</slot>
        </div>
        <div>
          <header>
            <h2><slot name="header">Title</slot></h2>
          </header>
          <slot>This is the default content if nothing gets specified to go here</slot>
        </div>
        <div>
          <slot v-bind:user="user">
            {{ user }}
          </slot>
        </div>
      </v-container>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "AboutVuebook",
};
</script>
