<template>
  <v-row>
    <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
      <v-img class="images"
        >{{ $store.state.images }}
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "RecentPhotos",
  data() {
    return {};
  },
};
</script>
