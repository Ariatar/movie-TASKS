<template>
   <v-container>
      <Loader class="text-center" v-if="loading" />
      <v-layout>
         <v-flex v-for="s in sessions" :key="s.isFree">
            <v-card>
               <v-toolbar>
                  <v-toolbar-title>Places</v-toolbar-title>
               </v-toolbar>
               <v-card-text>
                  <h1>
                     {{ s.places._id }}
                  </h1>
               </v-card-text>
            </v-card>
         </v-flex>
      </v-layout>
      <video width="100%" height="480" class="responsive-video mt-5" controls>
         <source src="movie.mp4" type="video/mp4" />
      </video>
   </v-container>
</template>

<script>
import axios from "axios";
export default {
   data() {
      return {
         loading: false,
         sessions: []
      };
   },
   async created() {
      this.loading = true;
      try {
         await axios
            .get(
               "https://cinema-api-test.herokuapp.com/movieShows",
               "Access-Control-Allow-Origin"
            )
            .then(res => {
               this.sessions = res.data;
               console.log(res.data);
               this.loading = false;
            });
      } catch (error) {
         this.loading = false;
         console.log(error);
      }
   }
};
</script>

<style lang="scss" scoped></style>
