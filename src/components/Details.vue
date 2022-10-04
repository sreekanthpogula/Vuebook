<template>
  <div id="details">
    <div class="container">
      <v-row v-for="(image, index) in images" :key="index" class="col-md-12" cols="4"
        ><div v-if="id == image.imageid">
          <v-img
            :src="image.userImageURL"
            :lazy-src="image.userImageURL"
            aspect-ratio="0"
            class="img-fluid"
          ></v-img>
          <h1>Details about the image are:{{ image.hits }}</h1>
        </div>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailsComponent",
  data() {
    return {
      imageid: this.$route.params.id,
      imageData: {},
    };
  },
  mounted() {
    this.$route.params.id;
    this.$store.dispatch("getsingleImages");
  },
  computed: {
    images() {
      return this.$store.getters["images"];
    },
  },
};
</script>
<style></style>
