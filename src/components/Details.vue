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
            <p>Message to grand child: {{ message }}</p>
          </div>
        </div>
      </v-row>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState, mapActions } from "vuex";
import axios from "axios";
export default {
  name: "DetailsComponent",
  inject: ["message"],
  props: [""],
  data() {
    return {
      imageid: this.$route.params.id,
      imageData: {},
    };
  },
  watch: {
    imageid() {
      console.log("it is printing");
    },
  },
  created() {
    this.$route.query;
  },
  mounted() {
    this.getDetails();
    console.log(this.$route);
    // this.$store.dispatch("getSingleImages");
  },
  computed: {
    ...mapState({
      images: (state) => state.a.imageData,
    }),
    ...mapGetters(["a/images"]),
  },
  methods: {
    ...mapActions({
      actionName: "a/getImages",
    }),
    getDetails() {
      axios
        .get(
          `https://pixabay.com/api/?key=30231407-63b59e473c794efcc287ff34f&q=yellow+flowers&image_type=photo&id=${this.imageid}`
        )
        .then((response) => {
          // this.id = response.data[this.imageid];
          console.log(response.data);
        });
    },
  },
};

// // import { mapState } from 'vuex'
// // import axios from "axios";
// export default {
//   name: "DetailsComponent",
//   data() {
//     return {
//       imageid: this.$route.query.imageid,
//       imageData: {},
//       idFilter: null,
//     };
//   },
//   mounted() {
//     // this.fetchImageDetails();
//     if ("id" in this.$route.query) {
//       this.idFilter = this.$route.query.id;
//     }
//     console.log(this.$route.query.id);
//     this.$store.dispatch("getsingleImages");
//   },
//   computed: {
//     // ...mapState({
//     //   images: state => state.imageData,
//     // }),
//     images() {
//       return this.$store.getters["images"];
//     },
//   },
//   // methods: {
//   //   updateQueryParams() {
//   //     const query = {};
//   //     if (this.idFilter != null) {
//   //       query.id = this.idFilter;
//   //     }
//   //     if (!this.imageid.isEqual(this.$route.query, query)) {
//   //       this.$router.push({ name: "Recentphotos", query: query });
//   //     }
//   //   },
//   // },
//   // methods: {
//   //   fetchImageDetails() {
//   //     axios
//   //       .get(
//   //         `https://pixabay.com/api/?key=30231407-63b59e473c794efcc287ff34f&q=yellow+flowers&image_type=photo${this.imageId}`
//   //       )
//   //       .then((response) => {
//   //         console.log("response", response.data);
//   //       })
//   //       .catch((err) => console.log(err));
//   //   },
//   // },
// };
</script>
<style></style>
