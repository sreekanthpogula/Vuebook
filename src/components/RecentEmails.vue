<template>
  <v-data-table
    :headers="headers"
    :items="products"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    headers: [
      {
        text: "Products",
        align: "start",
        sortable: false,
        value: "title",
      },
      { text: "Id", value: "id" },
      { text: "Brand", value: "brand" },
      { text: "Category", value: "category" },
      { text: "DiscountPercentage", value: "discountPercentage" },
      { text: "Stock", value: "stock" },
    ],
    loading: false,
    options: {
      page: 1,
      itemsPerPage: 10,
      sortBy: ["id"],
      sortDesc: [true],
    },
    products: [],
  }),
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          console.log(res.data, "response");
          this.products = res.data.products;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style></style>
