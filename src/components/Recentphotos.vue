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
  mounted() {
    console.log(this.$store);
  },
};
</script>
<style>
/* * {
  box-sizing: border-box;
}
/* .header {
  margin-top: 10px;
} */

.container {
  background-color: #bea5da;
  margin: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 10px;
  box-shadow: 8px 8px 8px #dde4ee, -8px -8px 8px #114d99, 8px 8px 8px #114d99,
    8px 8px 8px #114d99;
}

.images,
.buttons {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
}

#dog-img,
#cat-img {
  background-color: #fff;
  margin: 10px;
  width: 300px;
  height: 300px;
  border-radius: 15px;
}

#dog-img img,
#cat-img img {
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 15px;
}

#btn-dog,
#btn-cat {
  margin: 10px;
  padding: 2px 12px;
  border-radius: 5px;
  outline: none;
  font-family: inherit;
  font-size: 36px;
  font-weight: 600;
  color: #fff;
  background-color: rgb(25 118 210);
}
#btn-dog:active,
#btn-cat:active {
  transform: scale(0.9);
}

/* @media only screen and (max-width: 590px) {
  .header {
    font-size: 20px;
  } */
#dog-img,
#cat-img {
  background-color: #fff;
  width: 200px;
  height: 200px;
}
/* } */
</style>
