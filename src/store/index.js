import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    items: [],
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
  },
  actions: {
    async axiosData({ commit }) {
      this.loading = true;
      try {
        await axios
          .get(
            "https://cinema-api-test.herokuapp.com/movies",
            "Access-Control-Allow-Origin"
          )
          .then(res => {
            let items = res.data;
            console.log(res.data);
            commit("setItems", items);
            this.loading = false;
          });
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
  },
  modules: {},
  getters: {
    loaditems: state => {
      return state.items;
    },
  },
});
