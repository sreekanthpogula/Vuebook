<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container>
    <div class="home">
      <div class="mt-3">
        <h3>Hi {{ user.name }}</h3>
      </div>
    </div>
    <!-- <v-hover v-slot="{ hover }"
      ><v-btn
        class="v-btn white--text mx-1 px-6"
        elevation="2"
        rounded
        :style="{ 'background-color': hover ? 'black' : 'rgb(25 118 210)' }"
        @click="logout"
        >Logout</v-btn
      >
    </v-hover> -->
    <v-layout justify-center>
      <v-card-actions>
        <v-hover
          ><v-btn
            primary
            class="v-btn white--text mx-1 px-6"
            elevation="2"
            rounded
            :style="{ 'background-color': hover ? 'black' : 'rgb(25 118 210)' }"
            @click="logout"
          >
            <span>Logout</span>
          </v-btn>
        </v-hover>
      </v-card-actions>
    </v-layout>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "HomeComponent",
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style>
h1 {
  text-align: center;
}
.text {
  text-align: center;
}
</style>
