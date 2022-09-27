<template>
  <v-app>
    <v-toolbar color="primary" dark fixed app>
      <v-toolbar-title>Vuebook Dashboard</v-toolbar-title>
    </v-toolbar>
    <div class="some-class">
      <v-navigation-drawer permanent>
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{ username || "Sreekanth Pogula" }}
              </v-list-item-title>
              <v-list-item-subtitle v-on:click="logout">log out</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>
                <v-btn
                  class="mx-1 white--text"
                  elevation="1"
                  rounded
                  color="#1976d2"
                  :to="{ name: item.xyz }"
                >
                  {{ item.title }}
                </v-btn>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-card> &#9824; Vuebook </v-card>
      </v-navigation-drawer>
      <router-view> </router-view>
    </div>
    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="blue">
          <strong class="subheading">Get connected with us on social networks!</strong>

          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="48px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Vuebook</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DashBoard",
  data() {
    return {
      items: [
        { title: "RecentChats", icon: "mdi-message-text", xyz: "Recentchats" },
        { title: "RecentPics", icon: "mdi-image", xyz: "Recentphotos" },
        { title: "Emails", icon: "mdi-email", xyz: "RecentEmails" },
        { title: "About", icon: "mdi-help-box", xyz: "About" },
      ],
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      username: this.$route.params.username,
    };
  },
  methods: {
    logout() {
      this.$router.replace({ name: "login" });
    },
  },
};
</script>
<style>
.v-list--nav {
  padding-left: 4px;
  padding-right: 4px;
}
.some-class {
  display: flex;
  max-width: 1500px;
}
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}
</style>
