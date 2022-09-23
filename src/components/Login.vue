<template>
    <v-app>
       <v-main>
         <v-card dark flat>
         <v-toolbar flat height="72">
         <v-switch
            v-model="$vuetify.theme.dark"
            hint="This toggles the global state of the Vuebook theme"
            inset
            label="Try Vuebook Dark Theme"
            persistent-hint
         ></v-switch>
         </v-toolbar>
         </v-card>
          <v-container>
             <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                   <v-card class="elevation-12">
                      <v-toolbar dark color="primary">
                         <v-toolbar-title>Vuebook {{isRegister ? stateObj.register.name : stateObj.login.name}}</v-toolbar-title>
                      </v-toolbar>
                      <v-card-text>
                      <form ref="form" @submit.prevent="isRegister ? register() : login()">
                        <v-text-field label="Username" prepend-icon="mdi-account-circle" />
                                 <div class="message">
                                    {{ message }}
                                 </div>
                                 <!-- <div
                                    v-if="error"
                                    class="error"
                                 >
                                    Please enter a username with at least seven letters.
                                 </div> -->
                            <v-text-field
                               v-model="password"
                               name="password"
                               label="Password"
                               :type="showPassword ? 'text' : 'password'"
                                required
                                prepend-icon="mdi-lock"
                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="showPassword = !showPassword">
                            </v-text-field>
                            <v-text-field v-if="isRegister"
                               v-model="confirmPassword"
                               name="confirmPassword"
                               label="Confirm Password"
                               type="password"
                               placeholder="confirm password"
                               prepend-icon="mdi-lock"
                               :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                               @click:append="show = !show">
                            ></v-text-field>
                            <p class="forgot-password text-right mt-2 mb-4">
                            <router-link to="/forgot-password">Forgot password ?</router-link>
                            </p>
                            <div class="red--text"> {{errorMessage}}</div>
                            <v-btn type="submit" class="mt-4" color="primary" value="log in">{{isRegister ? stateObj.register.name : stateObj.login.name}}</v-btn>
                            <div class="grey--text mt-4" v-on:click="isRegister = !isRegister;">
                               {{toggleMessage}}  
                            </div>
                       </form>
                      </v-card-text>
                   </v-card>
                   <v-footer
                     dark
                     padless
                  >
                     <v-card
                        class="flex"
                        flat
                        tile
                     >
                        <v-card-title class="teal">
                        <strong class="subheading">Get connected with us on social networks!</strong>

                        <v-spacer></v-spacer>

                        <v-btn
                           v-for="icon in icons"
                           :key="icon"
                           class="mx-4"
                           dark
                           icon
                        >
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
 export default {
   name: "LoginComponent",
   data() {
     return {
      message: "",
       username: "",
       password: "",
       confirmPassword: "",
       isRegister : true,
       showPassword : false,
       show : false,
       errorMessage: "",
       icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram',
            ],
       stateObj: {
          register :{
             name: 'Register',
             message: 'Aleady have an Acoount? login.'
          },
          login : {
             name: 'Login',
             message: 'Register'
          }
       }
     };
   },
   methods: {
     login() {
       const { username } = this;
       this.$router.replace({ name: "dashboard", params: { username: username } });
     },
     register() {
        if(this.password == this.confirmPassword){
           this.isRegister = false;
           this.errorMessage = "";
           this.$refs.form.reset();
        }
        else {
          this.errorMessage = "password did not match"
        }
     }
   },
       computed: {
        toggleMessage : function() { 
           return this.isRegister ? this.stateObj.register.message : this.stateObj.login.message 
         },
     },
     
 };
 </script>