<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-card>
          <v-toolbar></v-toolbar>
          <v-img></v-img>
          <v-card-title></v-card-title>
          <v-card-text v-for="item in myArray" :key="item.title">
            <div>{{myArray}}</div>
            <h1></h1>
            <div></div>
            <div></div>
            <div></div>
          </v-card-text>
          <v-card-actions></v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      results: [],
      message: "Hello Vue.js!"
    };
  },
  // get API
  mounted() {
    axios.get("http://54.39.188.42/").then(res => {
      this.results = res.data;
      console.log(res.data).catch(err => err);
    });
  },

  computed: {
    myArray() {
      return atob(this.results);
    }
  }
};
</script>

<style scoped>
</style>