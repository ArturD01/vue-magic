<template>
  <div class="home">   
    <h1>Catalog</h1>
    <div class="v-catalog"  v-for="product in PRODUCTS"
      :key="product.id"
      :product_data="product">
      <div class="v-catalog-item">
       <p>{{product.name}}</p>
       <p>Price: {{product.price}}</p>
       <button>Add</button>
    </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    
  },
  computed:{
    ...mapGetters([
    'PRODUCTS'
  ]),
  },
  methods:{

  }
}
</script>

<style>
.v-catalog {
  padding-left: 250px;
  padding-right: 250px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.v-catalog-item {
 flex-basis: 25%;
  box-shadow: 0 0 8px #e0e0e0;
  padding: 16px;
  margin: 16px;
}
</style>
