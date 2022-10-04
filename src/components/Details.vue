<template>
  <div id="details">
    <div class="container">
      <v-row v-for="(image, index) in images" :key="index"
        ><div v-if="imageid == image.id">
          <v-img
            :src="image.userImageURL"
            :lazy-src="image.userImageURL"
            aspect-ratio="0"
          ></v-img>
          <div>
            <h1>
              These are the full-details of the image that you have selected :
              <ul>
                <li>Id of the image: {{ image.id }},</li>
                <li>Type of the image: {{ image.type }},</li>
                <li>Tags: {{ image.tags }},</li>
                <li>User: {{ image.user }},</li>
                <li>views: {{ image.views }},</li>
                <li>No of likes:{{ image.likes }},</li>
                <li>comments: {{ image.comments }},</li>
                <li>downloads:{{ image.downloads }}.</li>
              </ul>
            </h1>
          </div>
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
