<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex v-for="item in items" :key="item.name" xs12 md3>
        <v-img
          @click.prevent="main"
          style="width: 170px; height: 260px; cursor: pointer; border: 2px solid black"
          :src="item.pictureLink"
        ></v-img>
        <v-card width="170px" height="50px">
          <v-card-title
            class="black--text mt-2"
            style="font-size: 15px; text-align: center"
          >{{item.name}}</v-card-title>
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
      items: []
    };
  },
  mounted() {
    const self = this;
    axios.get("https://cinema-api-test.herokuapp.com/movies").then(res => {
      self.items = res.data;
      console.log(res.data).catch(err => {
        console.log(err);
      });
    });
  },
  methods: {
    main() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>