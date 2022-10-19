<!-- eslint-disable vue/valid-v-slot -->
<template>
  <div>
    <v-data-table
      dense
      :headers="headers"
      :items="products"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
    <v-data-table
      :headers="headers"
      :items="products"
      item-key="name"
      class="elevation-1"
      :search="search"
      :custom-filter="filterOnlyCapsText"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search (UPPER CASE ONLY)"
          class="mx-4"
        ></v-text-field>
      </template>
      <template v-slot:body.append>
        <tr>
          <td></td>
          <td>
            <v-text-field
              v-model="calories"
              type="number"
              label="Less than"
            ></v-text-field>
          </td>
          <td colspan="4"></td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ApidataComponent",
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
  filterOnlyCapsText(value, search, item) {
    return (
      value != null &&
      search != null &&
      item != null &&
      typeof value === "string" &&
      value.toString().toLocaleUpperCase().indexOf(search) !== -1
    );
    // console.log(item);
  },
};
</script>
<style></style>
