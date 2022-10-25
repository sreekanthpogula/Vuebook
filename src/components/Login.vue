<!-- eslint-disable vue/no-parsing-error -->
<template>
  <v-app>
    <v-main>
      <v-container>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Vuebook Login </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <form ref="form" @submit.prevent="">
                  <v-text-field label="Email" prepend-icon="mdi-email" />
                  <v-text-field
                    v-model="password"
                    name="password"
                    label="Password"
                    :type="showPassword ? 'text' : 'password'"
                    required
                    prepend-icon="mdi-lock"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                  >
                  </v-text-field>
                  <p class="forgot-password text-right mt-2 mb-4">
                    <router-link to="/forgot-password">Forgot password ?</router-link>
                  </p>
                  <div class="red--text">{{ errorMessage }}</div>
                  <v-btn type="submit" class="mt-4" color="primary" value="log in"
                    >Login</v-btn
                  >
                  <div
                    class="grey--text mt-4"
                    v-on:click="isLoggedIn = !isLoggedIn"
                  ></div>
                  <v-flex>
                    <v-layout align-center justify-space-between>
                      <p class="caption my-3">
                        <a href="#">Privacy Policy</a>
                        |
                        <a href="#">Terms of Service</a>
                      </p>
                      <p class="caption my-3">Powered by <a href="#">Vuejs</a></p>
                    </v-layout>
                  </v-flex>
                </form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  name: "LoginComponent",
  showPassword: false,
  errorMessage: "",
  password: false,
  setup() {
    const router = useRouter();
    const submit = async (e) => {
      const form = new FormData(e.target);
      const inputs = Object.fromEntries(form.entries());
      const { data } = await axios.post("login", inputs, {
        withCredentials: true,
      });
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      await router.push("/dashboard");
    };
    return {
      submit,
    };
  },
};
</script>
<style></style>
