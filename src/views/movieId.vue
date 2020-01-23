<template>
  <v-container>
    <v-layout>
      <v-flex>
        <div class="white--text text-center display-1 mb-2 mt-5">{{item[0].name}}</div>
        <div class="white--text ml-12">{{item[0].description}}</div>
      </v-flex>

      <v-flex>
        <v-img :src="item[0].pictureLink"></v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      item: {},
      id: this.$route.params.id,
      loading: false
    };
  },
  // get API
  async created() {
    this.loading = true;
    try {
      await axios
        .get(
          `https://cinema-api-test.herokuapp.com/movies?movie/${this.id}`,
          "Access-Control-Allow-Origin"
        )

        .then(res => {
          this.item = res.data;

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
</style>
