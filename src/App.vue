<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" temporary>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <p class="display-1">Жанры фильмов</p>
            <div class="mt-12 list">
              <p>ДЕЙСТВИЕ</p>
              <p>ПРИКЛЮЧЕНИЯ</p>
              <p>КОМЕДИЯ</p>
              <p>ДРАМА</p>
              <p>УЖАС</p>
              <p>ЗАПАДНЫЕ</p>
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Kinokard</v-toolbar-title>

      <v-spacer></v-spacer>
      <span class="black-text">{{date | date('datetime')}}</span>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import search from "./components/search";

export default {
  name: "App",

  components: {
    search
  },

  data() {
    return {
      drawer: false,
      date: new Date()
    };
  },

  mounted() {
    setInterval(() => {
      this.date = new Date();
    }, 1000);
  }
};
</script>



<style lang="scss" scoped>
.list p {
  color: green;
  padding: 0 20px;
  position: relative;
}
.list p:hover {
  color: red;
  cursor: pointer;
  transform: scale(1.5);
  margin-left: 20px;
  border-bottom: 2px dashed green;
  transition: 0.9s;
}

main {
  background-size: cover;
  background-image: url("https://c.wallhere.com/photos/8d/6e/1920x1608_px_artwork_cyberpunk_Cyberpunk_2077_rain_sword_warrior_women-1185278.jpg!d");
}

.border:hover {
  cursor: pointer;
  border-left: 2px solid red;
  background: #000;
}
</style>
