import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import Notifications from 'vue-notification'

Vue.use(Notifications)
Vue.use(Vuex);

const store = new Vuex.Store({
  // Product Statis
  state: {
    products: [],
    cart: []
  },
  getters: {
    // Data Statis Product
    products: state => state.products,
    // Data Statis Cart
    cart: state => state.cart,
  },
  actions: {
    // Get Product Data
    getProducts({
      commit
    }) {
      commit("getProductData")
    },
    // Add To Cart
    addToCart({
      commit
    }, item) {
      commit("addToCart", item)
    },
    // Get Cart
    getCart({
      commit
    }) {
      commit("getCart")
    },
    // Remove Cart
    removeCart({
      commit
    }, id) {
      commit("removeCart", id)
    }
  },
  mutations: {
    // Get Product Data
    getProductData(state) {
      axios.get('http://localhost:3000/product').then((response) => {
        state.products = response.data
      }).catch((error) => {
        console.log(error)
      })
    },
    // Add Cart
    addToCart(state, item) {
      axios.post('http://localhost:3000/cart', item).then((response) => {
        console.log(response)
        this.$notify({
          title: "Makanan telah masuk dikeranjang",
          text: "Cek kembali dikeranjang"
        })
      }).catch((error) => {
        console.log(error)
      })
    },
    // get Cart
    getCart(state) {
      axios.get('http://localhost:3000/cart').then((response) => {
        state.cart = response.data
        console.log(state.cart)
      }).catch((error) => {
        console.log(error)
      })
    },
    // Remove Cart
    removeCart(state, id) {
      axios.delete('http://localhost:3000/cart/' + id).then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })
    }
  }
})

export default store