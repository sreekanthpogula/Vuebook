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
    <!-- <About> -->
    <template v-slot:header>
      <!-- The code below goes into the header slot -->
      <!-- My Image’s Title -->
    </template>
    <!-- The code below goes into the default slot -->
    <!-- <img src="an-image.jpg" /> -->
    <!-- </About> -->
    <!-- <currentuser v-slot="{ user }">
      {{ user.firstName }}
    </currentuser> -->
  </v-app>
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
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
} */
#nav a {
  font-weight: bold;
  color: #0c0c0c;
}
#nav a.router-link-exact-active {
  color: #1638e3;
}
</style>
