<template>
  <v-container grid-list-lg>
    <carousel :items="items" />
    <Loader class="text-center" v-if="loading" />
    <movieList :items="items" />
  </v-container>
</template>

<script>
import movieList from "@/components/movieList.vue";
import carousel from "@/components/carousel";
import axios from "axios";
export default {
  components: {
    carousel,
    movieList
  },
  data() {
    return {
      items: [],
      loading: false
    };
  },
  beforeCreate() {
    document.body.className = "body-bg-image";
  },
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
  methods: {
    main() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>