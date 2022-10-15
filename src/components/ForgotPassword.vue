<template>
  <v-main>
    <v-container>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title> Reset Forgot Password </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <form ref="form" @submit.prevent="">
                <v-text-field
                  v-model="password"
                  name="Email"
                  label="Enter Email address Registered."
                  required
                  prepend-icon="mdi-lock"
                >
                </v-text-field>
                <v-btn type="submit" class="mt-4" color="primary" value="log in"
                  >Reset Password</v-btn
                >
                <div class="grey--text mt-4" v-on:click="isRegister = !isRegister">
                  {{ toggleMessage }}
                </div>
              </form>
            </v-card-text>
          </v-card>
          <v-card> </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-main>
</template>
<script>
export default {
  data() {
    return {
      Email: "",
    };
  },
  methods: {},
};
</script>
