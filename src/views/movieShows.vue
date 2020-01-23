<template>
  <v-container>
    <v-container>
      <Loader class="text-center" v-if="loading" />
      <v-layout row wrap style="left: 25%; position: relative" class="box1">
        <v-flex v-for="s in sessions" :key="s.isFree">
          <v-flex
            v-for="item of 5"
            :key="item"
            class="box1 mt-4 h"
            md2
            style="width: 20px; height: 20px; background-color: red; border-box"
          >{{s.ticketPrice}}</v-flex>
        </v-flex>
      </v-layout>

      <h6>Price: 222 UAH</h6>

      <h3 class="text-center">Display</h3>
      <div style="height: 5px; background-color: black; "></div>
      <video width="100%" height="480" class="responsive-video mt-5" controls>
        <source type="video/mp4" />
      </video>
    </v-container>
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

<style lang="scss" scoped>
.box1 {
  background: #f0f0f0; /* Цвет фона */
  width: 600px; /* Ширина блока */
  padding: 10px; /* Поля */
  height: 300px;
  border: 2px solid #000; /* Параметры рамки */
  border-radius: 10px;
  background-color: grey;
  .h:hover {
    background-color: green;
    cursor: pointer;
    opacity: 0.8;
  }
}
</style>

