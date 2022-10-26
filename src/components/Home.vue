<!--<template>
  <v-container>
     <h1>WELCOME TO {{ message }}</h1> 

    <div class="container mt-5 text-center">
      <h3>{{ message }}</h3>
      <v-hover v-slot="{ hover }"
        ><v-btn
          class="v-btn white--text mx-1 px-6"
          elevation="2"
          rounded
          :style="{ 'background-color': hover ? 'black' : 'rgb(25 118 210)' }"
          @click="logout"
          >Logout</v-btn
        >
      </v-hover>
    </div></v-container
  >
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
export default {
  name: "HomeComponent",
  setup() {
    const message = ref("");
    const router = useRouter();
    onMounted(async () => {
      try {
        const { data } = await axios.get("user");
        message.value = `Hi ${data.name}`;
      } catch (e) {
        await router.push("/login");
      }
    });
    const logout = async () => {
      await axios.post("logout", {}, { withCredentials: true });
      axios.defaults.headers.common["Authorization"] = "";
      await router.push("/login");
    };
    return {
      message,
      logout,
    };
  },
};
</script>-->
<template>
  <div class="container mt-5 text-center">
    <h3>{{ message }}</h3>

    <a href="javascript:void(0)" class="btn btn-lg btn-primary" @click="logout">Logout</a>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
export default {
  name: "HomeComponent",
  setup() {
    const message = ref("");
    const router = useRouter();
    onMounted(async () => {
      try {
        const { data } = await axios.get("user");
        message.value = `Hi ${data.name}`;
      } catch (e) {
        await router.push("/login");
      }
    });
    const logout = async () => {
      await axios.post("logout", {}, { withCredentials: true });
      axios.defaults.headers.common["Authorization"] = "";
      await router.push("/login");
    };
    return {
      message,
      logout,
    };
  },
};
</script>
<style>
h1 {
  text-align: center;
}
</style>
