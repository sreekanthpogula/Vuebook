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
                </form>
              </v-card-text>
            </v-card>
            <v-footer dark padless>
              <v-card class="flex" flat tile>
                <v-card-title class="teal">
                  <strong class="subheading"
                    >Get connected with us on social networks!</strong
                  >

                  <v-spacer></v-spacer>

                  <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
                    <v-icon size="24px">
                      {{ icon }}
                    </v-icon>
                  </v-btn>
                </v-card-title>

                <v-card-text class="py-2 white--text text-center">
                  {{ new Date().getFullYear() }} — <strong>Vuebook</strong>
                </v-card-text>
              </v-card>
            </v-footer>
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
  setup() {
    const router = useRouter();
    const submit = async (e) => {
      const form = new FormData(e.target);
      const inputs = Object.fromEntries(form.entries());
      const { data } = await axios.post("login", inputs, {
        withCredentials: true,
      });
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      await router.push("/");
    };
    return {
      submit,
    };
  },
};
</script>
<style></style>
