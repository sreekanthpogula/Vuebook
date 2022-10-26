<!--<template>
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
                  <div class="message">
                    {{ message }}
                  </div>
                  <v-text-field
                    v-model="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    :rules="passwordRules"
                  />

                  <v-text-field
                    v-model="confirmPassword"
                    label="Confirm Password"
                    name="confirmPassword"
                    prepend-icon="mdi-lock"
                    type="password"
                    :rules="confirmPasswordRules"
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
                  <v-btn>
                    <v-icon color="grey darken-4">mdi-facebook</v-icon>
                  </v-btn>
                  <v-btn outline fab small color="blue-grey lighten-4">
                    <v-icon color="grey darken-4">mdi-google-plus</v-icon>
                  </v-btn>
                  <v-btn outline fab small color="blue-grey lighten-4">
                    <v-icon color="grey darken-4">mdi-linkedin</v-icon> </v-btn
                  ><v-checkbox
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
                  <p class="forgot-password text-right mt-2 mb-4">
                    <router-link to="/forgot-password">Forgot password ?</router-link>
                  </p> 
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
// import axios from "axios"; // import { useRouter } from "vue-router"; // export default
{ // name: "RegisterComponent", // message: "", // Firstname: "", // Lastname: "", //
password: "", // confirmPassword: "", // isRegister: true, // showPassword: false, //
show: false, // errorMessage: "", // icons: ["mdi-facebook", "mdi-twitter",
"mdi-linkedin", "mdi-instagram"], // setup() { // const router = useRouter(); // const
submit = async (e) => { // const form = new FormData(e.target); // const inputs =
Object.fromEntries(form.entries()); // await axios.post("register", inputs); // await
router.push("/login"); // }; // return { // submit, // }; // }, // }; //
<script>
export default {
  name: "RegisterUser",
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
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
    };
  },
  methods: {
    register() {
      this.$store
        .dispatch("register", {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
        })
        .then(() => {
          this.$router.push({ name: "dashboard" });
        })
        .catch((err) => {
          this.status = err.response.status;
        });
    },
  },
};
</script>-->
<template>
  <main class="form-signin">
    <form @submit.prevent="submit">
      <h1 class="h3 mb-3 fw-normal">Please register</h1>

      <div class="form-floating">
        <input class="form-control" name="name" placeholder="Name" />
        <label>First Name</label>
      </div>

      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          name="email"
          placeholder="name@example.com"
        />
        <label>Email address</label>
      </div>

      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          name="password"
          placeholder="Password"
        />
        <label>Password</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
    </form>
  </main>
</template>

<script>
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  name: "RegisterComponent",
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
