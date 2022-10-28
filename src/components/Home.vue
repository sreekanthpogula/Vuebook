<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container>
    <div class="home">
      <div class="mt-3">
        <h3>
          <h1>Hi Welcome {{ user?.firstName }} {{ user?.lastName }}</h1>
        </h3>
        <v-body>
          <v-img :src="getImageUrl" alt="userImage"></v-img>
        </v-body>
      </div>
    </div>
    <v-layout justify-center>
      <v-card-actions>
        <v-hover
          ><v-btn
            v-if="user"
            primary
            class="v-btn white--text mx-1 px-6"
            elevation="2"
            rounded
            :style="{ 'background-color': hover ? 'black' : 'rgb(25 118 210)' }"
            @click="logout"
            to="/dashboard/recentchats"
          >
            <span>DashBoard</span>
          </v-btn>
        </v-hover>
      </v-card-actions>
    </v-layout>
  </v-container>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "HomeComponent",
  computed: {
    ...mapState({
      user: (state) => state.c.user,
    }),
    getImageUrl() {
      if (!this.user) return "";
      return this.user?.image;
    },
  },
};
</script>

<style>
h3 {
  text-align: center;
}
.text {
  text-align: center;
}
</style>
