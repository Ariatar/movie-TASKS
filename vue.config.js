module.exports = {
   transpileDependencies: ["vuetify"],
   devServer: {
      proxy: "https://cinema-api-test.herokuapp.com/"
   }
};
