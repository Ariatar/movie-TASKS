<template>
  <div>
    <div v-for="item in items" :key="item.id"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "search",
  data() {
    return {
      items: []
    };
  },
  async mounted() {
    const self = this;
    await axios
      .post("https://cinema-api-test.herokuapp.com/bookingPlace")
      .then(res => {
        self.items = res.data;
        console.log(res.data).catch(err => {
          console.log(err);
        });
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.results img {
  height: 300px;
  margin: 10px;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>