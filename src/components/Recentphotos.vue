<template>
  <v-row>
    <v-col
      v-for="(image, index) in images"
      :key="index"
      class="d-flex child-flex"
      cols="4"
    >
      <router-link to="/dashboard/recentphotos/Details/id"
        ><v-img
          :src="image.userImageURL"
          :lazy-src="image.userImageURL"
          aspect-ratio="1"
          class="grey lighten-2"
        ></v-img>
        <h3 @click="goTodetail()"></h3>
      </router-link>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "RecentPhotos",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getImages");
  },
  methods: {
    goTodetail() {
      this.$route.push({ name: "Details", params: {} });
    },
  },
  computed: {
    images() {
      return this.$store.getters["images"];
    },
  },
};
</script>
<style></style>
