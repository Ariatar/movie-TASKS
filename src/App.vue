<template>
   <v-app>
      <v-navigation-drawer v-model="drawer" app temporary color="#6A76AB" dark>
         <v-card class="mx-auto primary red--text" max-width="434" tile>
            <v-avatar class="profile" color="grey" size="164" tile>
               <v-img src="./assets/Alex.jpg"></v-img>
            </v-avatar>
            <v-card-title>Alex Sweden</v-card-title>
            <v-card-subtitle>Gres</v-card-subtitle>
         </v-card>
         <v-list class="mt-12">
            <v-list-item v-for="item in items" :key="item.title" link>
               <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
               </v-list-item-icon>

               <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
               </v-list-item-content>
            </v-list-item>
         </v-list>

         <template v-slot:append>
            <div class="pa-2">
               <v-btn class="primary" text block>Logout</v-btn>
            </div>
         </template>
      </v-navigation-drawer>
      <v-app-bar app color="primary" dark>
         <v-toolbar-title>Kinokard</v-toolbar-title>

         <v-spacer></v-spacer>
         <span class="black-text">{{ date | date("datetime") }}</span>
         <v-app-bar-nav-icon
            @click.prevent="drawer = !drawer"
         ></v-app-bar-nav-icon>
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
         date: new Date(),
         items: [
            { title: "ПРИКЛЮЧЕНИЯ", icon: "mdi-fan", route: "/Fantazy" },
            { title: "КОМЕДИЯ", icon: "mdi-circle", route: "/Future" },
            { title: "ДРАМА", icon: "mdi-cat", route: "/Action" },
            { title: "УЖАС", icon: "mdi-dog", route: "/Programming" },
            { title: "ЗАПАДНЫЕ ", icon: "mdi-heart", route: "/Romantic" }
         ]
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
