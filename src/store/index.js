import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      {
        id: 1,
        image: "1.jpg",
        name: "T-shirt 1",
        price: 2100,
        available: true,
      },
      {
        id: 2,
        image: "2.jpg",
        name: "T-shirt 2",
        price: 3150,
        available: true,
      }
    ]
  },
  getters: {
    PRODUCTS(state){
      return state.products
  }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
