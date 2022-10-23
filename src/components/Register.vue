<template>
  <v-app>
    <v-main>
      <v-container>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Vuebook Signup </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <form ref="form" @submit.prevent="">
                  <v-text-field label="Firstname" prepend-icon="mdi-account-circle" />
                  <v-text-field label="Lastname" prepend-icon="mdi-account-circle" />
                  <v-text-field label="Email" prepend-icon="mdi-email" />
                  <div class="message">
                    {{ message }}
                  </div>
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
                  <v-text-field
                    v-if="isRegister"
                    v-model="confirmPassword"
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    placeholder="confirm password"
                    prepend-icon="mdi-lock"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="show = !show"
                  >
                    ></v-text-field
                  ><v-checkbox
                    label="Accept Terms"
                    v-model="value"
                    value="value"
                  ></v-checkbox>
                  <!-- <p class="forgot-password text-right mt-2 mb-4">
                    <router-link to="/forgot-password">Forgot password ?</router-link>
                  </p> -->
                  <!-- <div class="red--text">{{ errorMessage }}</div> -->
                  <v-btn type="submit" class="mt-4" color="primary" value="register"
                    >Register</v-btn
                  >
                  <div
                    class="grey--text mt-4"
                    v-on:click="isRegister = !isRegister"
                  ></div>
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
import { useRouter } from "vue-router";
export default {
  name: "RegisterComponent",
  message: "",
  Firstname: "",
  Lastname: "",
  password: "",
  confirmPassword: "",
  isRegister: true,
  showPassword: false,
  show: false,
  errorMessage: "",
  icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  setup() {
    const router = useRouter();
    const submit = async (e) => {
      const form = new FormData(e.target);
      const inputs = Object.fromEntries(form.entries());
      await axios.post("register", inputs);
      await router.push("/login");
    };
    return {
      submit,
    };
  },
};
</script>
<style>
#nav a {
  font-weight: bold;
  color: #ffffff;
}
a:hover {
  cursor: pointer;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
