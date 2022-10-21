<template>
  <v-app>
    <v-container>
      <v-toolbar class="header" color="primary" dark fixed app>
        <v-toolbar-title>Vuebook Dashboard </v-toolbar-title>
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/register">Register</router-link> |
          <router-link to="/login">Login</router-link>
        </div>
      </v-toolbar>
    </v-container>
    <router-view />
  </v-app>

  <!-- <v-app>
    <v-app-bar app dark color="blue">
      <v-toolbar class="header" color="primary" dark fixed app>
        <v-toolbar-title>Vuebook Dashboard </v-toolbar-title>
        <div id="nav">
          <router-link to="/"><v-btn text rounded>Home</v-btn></router-link> |
          <router-link to="/register"><v-btn text rounded>Register</v-btn></router-link>
          | <router-link to="/login"><v-btn text rounded>Login</v-btn></router-link
          ><v-btn text rounded>Contact us</v-btn>
        </div>
      </v-toolbar>
      <div class="app-layout-content">
        <v-container fluid class="content">
          <router-view> </router-view>
        </v-container>
      </div>
    </v-app-bar>

    <v-content> </v-content>
    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="teal">
          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Vuebook</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
<v-app>
    <v-container> </v-container>
    <router-view />
  </v-app>  -->
</template>
<script>
export default {
  provide() {
    return {
      message: "hello",
    };
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
