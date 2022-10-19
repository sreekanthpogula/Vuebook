<template>
  <v-app>
    <router-view></router-view>
    <!-- <About> -->
    <template v-slot:header>
      <!-- The code below goes into the header slot -->
      <!-- My Image’s Title -->
    </template>
    <!-- The code below goes into the default slot -->
    <!-- <img src="an-image.jpg" /> -->
    <!-- </About> -->
    <currentuser v-slot="{ user }">
      {{ user.firstName }}
    </currentuser>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
