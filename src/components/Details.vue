<template>
  <div id="details">
    <div class="container">
      <v-row v-for="(image, index) in images" :key="index" class="col-md-12" cols="4"
        ><div v-if="imageid == image.id">
          <v-img
            :src="image.userImageURL"
            :lazy-src="image.userImageURL"
            aspect-ratio="0"
            class=""
          ></v-img>
          <h1>
            The Details of the image are : ID:{{ image.id }}, Type:{{
              image.type
            }},Tags:{{ image.tags }},User:{{ image.user }}
          </h1>
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
