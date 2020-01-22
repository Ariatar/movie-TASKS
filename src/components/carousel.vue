<template>
  <v-carousel height="400px" width="400" cycle show-arrows-on-hover>
    <v-carousel-item v-for="item in items" :key="item.name">
      <v-container fluid>
        <v-img
          style="position: relative; left: 20%"
          width="600px"
          height="450px"
          :src="item.pictureLink"
        ></v-img>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: ["items"],

  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>