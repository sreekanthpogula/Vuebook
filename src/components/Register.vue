<!-- eslint-disable vue/multi-word-component-names -->
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
                <form ref="form" @submit.prevent="register">
                  <v-text-field
                    v-model="firstname"
                    type="firstname"
                    label="Firstname"
                    prepend-icon="mdi-account-circle"
                  />
                  <v-text-field
                    v-model="lastname"
                    type="lastname"
                    label="Lastname"
                    prepend-icon="mdi-account-circle"
                  />
                  <v-text-field
                    v-model="email"
                    type="email"
                    label="Email"
                    prepend-icon="mdi-email"
                  />
                  <v-text-field
                    v-model="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                    type="password"
                    :rules="passwordRules"
                  />

                  <v-text-field
                    v-model="confirmPassword"
                    label="Confirm Password"
                    name="confirmPassword"
                    prepend-icon="mdi-lock"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                    type="password"
                    :rules="confirmPasswordRules"
                  />
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
                  </v-text-field>
                  <p v-if="status === 400">Please enter different info.</p>
                  <v-checkbox
                    label="Accept Terms"
                    v-model="value"
                    value="value"
                  ></v-checkbox>
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
                  <div class="red--text">{{ errorMessage }}</div>
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
export default {
  name: "RegisterComponent",
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      value: "",
      confirmPassword: "",
      passwordRules: [
        (value) => !!value || "Please type password.",
        (value) => (value && value.length >= 8) || "minimum 8 characters",
      ],
      confirmPasswordRules: [
        (value) => !!value || "type confirm password",
        (value) => value === this.password || "The password confirmation does not match.",
      ],
      status: null,
      form: this.initForm(),
    };
  },
  methods: {
    register() {
      axios
        .post("api/auth/register", this.form)
        .then(() => {
          this.form = this.initForm();
          this.$router.push("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    initForm() {
      return {
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
      };
    },
  },
};
</script>
<style>
Footer #nav a {
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
