<template>
    <Shop :product="getkids" :image="heroMen" :category="category" />
  </template>
  
  <script>
  import { mapGetters } from "vuex";
  import Shop from "@/components/Shop.vue";
  
  export default {
    components: { Shop },
    data() {
      return {
        heroMen: "heroMen.jpg",
        category: "Men",
      };
    },
    computed: {
      ...mapGetters(["getMen"]),
    },
  };
  </script>
  
  <style></style>