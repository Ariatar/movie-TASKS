<template>
  <v-layout class="mt-5" row wrap>
    <v-flex v-for="(item, i) in items" :key="i.title" xs12 md2>
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
</template>

<script>
export default {
  props: ["items"]
};
</script>

<style lang="scss" scoped>
</style>