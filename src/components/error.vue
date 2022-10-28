<template>
  <div>
    <center>
      <img src="../assets/404.jpg" />
      <h2>it seems you're not LoggedIn</h2>
      <p>
        <v-hover v-slot="{ hover }">
          <v-btn
            class="v-btn white--text mx-1 px-6"
            elevation="2"
            to="/login"
            x-small
            rounded
            :style="{ 'background-color': hover ? '#BB86FC' : 'rgb(25 118 210)' }"
            >Login</v-btn
          >
        </v-hover>
      </p>
    </center>
  </div>
</template>

<script>
export default {
  name: "errorComponent",
  data() {
    return {};
  },
};
</script>

<style scoped></style>
