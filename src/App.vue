<template>
  <v-app>
    <header>
      <v-toolbar class="header" color="primary" dark fixed app>
        <v-toolbar-title>Vuebook</v-toolbar-title>
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/register">Sign up</router-link> |
          <router-link to="/login">Login</router-link>
        </div>
      </v-toolbar>
    </header>
    <router-view />
    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="primary">
          <strong class="subheading">Get connected with us on social networks!</strong>

          <v-spacer></v-spacer>
          <v-btn
            href="https://www.facebook.com/groups/vuejsdevelopers/"
            target="_blank"
            icon
          >
            <span class="group pa-2">
              <v-icon medium>mdi-facebook</v-icon>
            </span>
          </v-btn>
          <v-btn href="https://twitter.com/vuejs" target="_blank" icon>
            <span class="group pa-2">
              <v-icon medium>mdi-twitter</v-icon>
            </span>
          </v-btn>
          <v-btn href="https://github.com/vuejs/vue" target="_blank" icon>
            <span class="group pa-2">
              <v-icon medium>mdi-github</v-icon>
            </span>
          </v-btn>
          <v-btn
            href="https://www.instagram.com/vuejsdevelopers/?hl=en"
            target="_blank"
            icon
          >
            <span class="group pa-2">
              <v-icon medium>mdi-instagram</v-icon>
            </span>
          </v-btn>
          <v-btn
            href="https://au.linkedin.com/company/vuejsdevelopers"
            target="_blank"
            icon
          >
            <span class="group pa-2">
              <v-icon medium>mdi-linkedin</v-icon>
            </span>
          </v-btn>
        </v-card-title>
      </v-card>
    </v-footer>
  </v-app>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav a {
  font-weight: bold;
  color: #0c0c0c;
}
#nav a.router-link-exact-active {
  color: #1638e3;
}
</style>
