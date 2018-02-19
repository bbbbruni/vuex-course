import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: { // = data
      products: []
    },

    getters: { // computed properties
      productsCount () {

      }
    },

    actions: { // = methods
      fetchProducts () {

      }
    },

    mutations: { // setting and updating the state
      setProducts (state, products) {
        state.products = products
      }
    }
  })