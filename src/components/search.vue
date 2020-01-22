<template>
   <v-container>
      <v-container>
         <v-layout class="mr-12">
            <v-flex class="top-search mr-5" xs7 md8 offset-sm3>
               <v-text-field
                  label="find movie"
                  v-model="searchFilm"
                  prepend-icon="mdi-youtube red--text"
               ></v-text-field>
            </v-flex>
            <v-flex class="top-search ml-4" xs5 md4>
               <v-select
                  label="genre"
                  :items="genre"
                  v-model="genr"
                  multiple
               ></v-select>
            </v-flex>
         </v-layout>
      </v-container>
      <Loader v-if="loading" class="text-center" />

      <v-card
         max-height="450"
         class="mt-8 primary"
         v-for="item in filterItem"
         :key="item.name"
      >
         <v-layout row wrap>
            <v-flex xs12 md6>
               <v-card-title class="display-1 text-uppercase">
                  {{ item.name }}
               </v-card-title>
               <v-card-subtitle>Date: {{ item.dateOfRelease }}</v-card-subtitle>
               <v-card-subtitle>Genre: {{ item.genre_id }}</v-card-subtitle>
               <v-card-text>
                  <div style=" font-style: italic" class="black--text">
                     {{ item.description }}
                  </div>
               </v-card-text>
               <v-card-actions>
                  <v-rating color="yellow"></v-rating>
               </v-card-actions>
            </v-flex>

            <v-flex xs12 md6>
               <v-img
                  style="left: 281px; border: 3px solid black"
                  class="ml-12"
                  height="375px "
                  width="250px"
                  :src="item.pictureLink"
               >
                  <h1 class="red--text text-center">{{ item.name }}</h1>
               </v-img>
               <div style="left: 328px; position: relative">
                  <v-btn
                     to="/tickets"
                     width="250px"
                     class="btn-smaall success btn-floating pulse"
                     >Watch now</v-btn
                  >
                  <br />

                  <v-btn width="250px" class="btn-smaall red"
                     >Watch Later</v-btn
                  >
               </div>
            </v-flex>
         </v-layout>
      </v-card>
   </v-container>
</template>

<script>
import Loader from "@/components/Loader.vue";
import axios from "axios";
export default {
   components: {
      Loader
   },
   name: "search",
   data() {
      return {
         genr: [],
         loading: false,
         date: new Date(),
         items: [],
         films: [],
         searchFilm: null,
         genre: [
            "ДЕЙСТВИЕ",
            "ПРИКЛЮЧЕНИЯ",
            "КОМЕДИЯ",
            "ДРАМА",
            "УЖАС",
            "ЗАПАДНЫЕ"
         ]
      };
   },

   // get API
   async mounted() {
      this.loading = true;
      try {
         await axios
            .get(
               "https://cinema-api-test.herokuapp.com/movies",
               "Access-Control-Allow-Origin"
            )

            .then(res => {
               this.items = res.data;
               console.log(res.data);
               this.loading = false;
            });
      } catch (error) {
         this.loading = false;
         console.log(error);
      }
   },

   //filtered films
   computed: {
      filterItem() {
         let items = this.items;
         if (this.searchFilm) {
            items = items.filter(
               i =>
                  i.name.toLowerCase().indexOf(this.searchFilm.toLowerCase()) >=
                     0 ||
                  i.description
                     .toLowerCase()
                     .indexOf(this.searchFilm.toLowerCase()) >= 0
            );
         }
         return items;
      }
   }
};
</script>

<style scoped>
.top-search .v-text-field {
   height: 46px;
   border: 2px solid black;
   width: 100%;
   background-color: #233a50cc;
   font-size: #abb7c4;
   color: #abb7c4;
   font-weight: 300;
   text-transform: none;
}

.top-search .v-text-field::-webkit-input-placeholder {
   color: #abb7c4;
}
</style>
