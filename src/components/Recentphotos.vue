<template>
  <v-row>
    <v-col
      v-for="(image, index) in images"
      :key="index"
      class="d-flex child-flex"
      cols="4"
    >
      <!-- `/dashboard/recentphotos/Details?id=${image.id}&from=recentPhotos-->
      <router-link
        :to="`/dashboard/recentphotos/Details?id=${image.id}&from=recentPhotos`"
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
import { mapState, mapActions } from "vuex";
export default {
  name: "RecentPhotos",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      images: (state) => state.a.imageData,
    }),
  },

  methods: {
    // ...mapActions(["a/getImages"]),
    ...mapActions({
      actionName: "a/getImages",
    }),
  },

  mounted() {
    this.actionName();
  },

  // mounted() {
  //   // this.$store.dispatch("getImages");
  //   store.dispatch("getImages");
  // },
  // images() {
  //   return this.$store.getters["images"];
  //   // return store.gettets["images"];
  // },
};
</script>
<style></style>
