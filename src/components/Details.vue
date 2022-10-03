<template>
  <div class="details">
    <div class="container">
      <div class="row" v-for="(image, index) in images" :key="index">
        <div v-if="id == images.id">
          <h1>{{ image.title }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailsComponent",
  data() {
    return {
      images: {},
      id: this.$route.params.id,
      title: this.$route.params.title,
    };
  },
};
</script>

<style>
.h1 {
  text-align: center;
}
</style>
