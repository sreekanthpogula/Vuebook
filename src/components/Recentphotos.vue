<template>
  <v-row>
    <v-col
      v-for="(image, index) in images"
      :key="index"
      class="d-flex child-flex"
      cols="4"
    >
      <!-- `/dashboard/recentphotos/Details?id=${image.id}&from=recentPhotos-->
      <router-link :to="`/dashboard/recentphotos/Details/${image.id}`"
        ><v-img
          :src="image.userImageURL"
          :lazy-src="image.userImageURL"
          aspect-ratio="1"
          class="grey lighten-2"
        ></v-img>
      </router-link>
    </v-col>
  </v-row>
</template>

<script>
// import store from "./store/index";

export default {
  name: "RecentPhotos",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getImages");
    // store.dispatch("getImages");
  },
  computed: {
    images() {
      return this.$store.getters["images"];
    },
  },
};
</script>
<style></style>
