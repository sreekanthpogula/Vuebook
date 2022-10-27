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
                <form ref="form" @submit.prevent="login">
                  <v-text-field
                    v-model="username"
                    label="Username"
                    prepend-icon="mdi-email"
                  />
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
                    <router-link to="/forgot-password">Forgot password</router-link>
                  </p>
                  <div class="red--text">{{ errorMessage }}</div>
                  <p v-if="status === 400">Invalid login info.</p>
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
import axios from "axios";
export default {
  name: "LoginComponent",
  data() {
    return {
      password: "0lelplR",
      username: "kminchelle",
    };
  },
  methods: {
    login() {
      axios
        .post("https://dummyjson.com/auth/login", {
          password: this.password,
          username: this.username,
        })
        .then((response) => {
          console.log(response.data);
          localStorage.setItem("token", response.data.access_token);
          this.$store.dispatch("updateuser", response.data);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    initForm() {
      return {
        username: null,
        password: null,
      };
    },
  },
};
</script>
<style></style>
