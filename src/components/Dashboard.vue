<template>
  <div class="app-layout">
    <!-- <v-toolbar class="header" color="primary" dark fixed app>
      <v-toolbar-title>Vuebook Dashboard </v-toolbar-title>
    </v-toolbar> -->
    <div class="app-layout-content">
      <v-navigation-drawer class="side-bar" permanent>
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img :src="user.image"></v-img>
            </v-list-item-avatar>
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="text-h5">
                  {{ user.username }}
                </v-list-item-title>
                <v-btn v-on:click="logout" to="*">logout</v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>
        <v-list dense nav>
          <v-list-item-group color="primary">
            <v-list-item v-for="(item, i) in items" :key="i.title" link>
              <!-- <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon> -->
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
                    <v-list-item-icon>
                      <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    {{ item.title }}
                  </v-btn>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-card> &#9824; Vuebook </v-card>
      </v-navigation-drawer>
      <v-container fluid class="content">
        <router-view> </router-view>
        <!-- <v-btn class="btn btn-primary btn-lg">
          <slot> Click me </slot>
        </v-btn> -->
        <!-- <v-btn class="mx-1 white--text" elevation="1" rounded color="#1976d2">
          <img src="" /> &#128074;SMASH THIS BUTTON TO GET $500!!!
        </v-btn> -->
      </v-container>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DashBoard",
  data() {
    return {
      items: [
        { title: "RecentChats", icon: "mdi-whatsapp", xyz: "Recentchats" },
        { title: "RecentPics", icon: "mdi-image", xyz: "Recentphotos" },
        { title: "APIDATA", icon: "mdi-database", xyz: "RecentEmails" },
        // { title: "Shop", icon: "mdi-store", xyz: "shop" },
        { title: "About", icon: "mdi-information", xyz: "About" },
      ],
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      // username: this.$route.params.username,
    };
  },
  methods: {
    logout() {
      this.$router.replace({ name: "login" });
    },
  },
  computed: {
    ...mapGetters(["user"]),
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
  color: #010a06ef;
}
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
.v-toolbar__content,
.v-toolbar__extension {
  align-items: center;
  display: flex;
  position: relative;
  z-index: 0;
  justify-content: space-between;
}
</style>
