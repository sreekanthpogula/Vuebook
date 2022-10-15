<template>
  <div class="app-layout">
    <v-toolbar class="header" color="primary" dark fixed app>
      <v-toolbar-title>Vuebook Dashboard</v-toolbar-title>
    </v-toolbar>
    <div class="app-layout-content">
      <v-navigation-drawer class="side-bar" permanent>
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
            </v-list-item-avatar>
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="text-h6">
                  {{ username || "Sreekanth Pogula" }}
                </v-list-item-title>
                <v-btn v-on:click="logout">logout</v-btn>
              </v-list-item-content>
            </v-list-item>
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
                  :to="{
                    name: item.xyz,
                  }"
                >
                  {{ item.title }}
                </v-btn>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-card> &#9824; Vuebook </v-card>
      </v-navigation-drawer>
      <v-container fluid class="content">
        <router-view> </router-view>
      </v-container>
    </div>
    <v-footer class="footer" dark padless>
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
  </div>
</template>

<script>
export default {
  name: "DashBoard",
  data() {
    return {
      items: [
        { title: "RecentChats", icon: "mdi-whatsapp", xyz: "Recentchats" },
        { title: "RecentPics", icon: "mdi-image", xyz: "Recentphotos" },
        { title: "Emails", icon: "mdi-email", xyz: "RecentEmails" },
        { title: "shop", icon: "mdi-store", xyz: "e-store" },
        { title: "About", icon: "mdi-information", xyz: "About" },
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
.app-layout-content {
  height: calc(100vh - 123px);
  display: flex;
}
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}

.app-layout {
  max-height: 100vh;
  overflow: hidden;
}

.app-layout .header,
.app-layout .footer {
  max-height: 64px;
}

.app-layout-content .side-bar {
  min-width: 256px;
}

.app-layout-content .content {
  overflow-y: scroll;
}
.v-list-item {
  /* align-items: center; */
  display: flex;
  flex: 1 1 100%;
  letter-spacing: normal;
  min-height: 48px;
  outline: none;
  padding: 0 16px;
  position: relative;
  text-decoration: none;
}
.v-icon.v-icon {
  align-items: center;
  display: inline-flex;
  font-feature-settings: "liga";
  font-size: 24px;
  justify-content: center;
  letter-spacing: normal;
  line-height: 2;
  position: relative;
  text-indent: 0;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
/* .v-application--wrap {
  flex: 1 1 auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  position: relative;
} */
</style>
