<template>
    <v-app>
       <v-main>
          <v-container fluid fill-height>
             <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                   <v-card class="elevation-12">
                      <v-toolbar dark color="primary">
                         <v-toolbar-title>Vuebook {{isRegister ? stateObj.register.name : stateObj.login.name}}</v-toolbar-title>
                      </v-toolbar>
                      <v-card-text>
                      <form ref="form" @submit.prevent="isRegister ? register() : login()">
                        <v-text-field label="Username" prepend-icon="mdi-account-circle"/>
                            <v-text-field
                               v-model="password"
                               name="password"
                               label="Password"
                               :type="showPassword ? 'text' : 'password'"
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
                               required
                            ></v-text-field>
                            <div class="red--text"> {{errorMessage}}</div>
                            <v-btn type="submit" class="mt-4" color="primary" value="log in">{{isRegister ? stateObj.register.name : stateObj.login.name}}</v-btn>
                            <div class="grey--text mt-4" v-on:click="isRegister = !isRegister;">
                               {{toggleMessage}}  
                            </div>
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
 export default {
   name: "App",
   data() {
     return {
       username: "",
       password: "",
       confirmPassword: "",
       isRegister : false,
       errorMessage: "",
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
           return this.isRegister ? this.stateObj.register.message : this.stateObj.login.message }
     }
 };
 </script>