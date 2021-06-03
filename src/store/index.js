import Vue from 'vue';

const store = Vue.observable({
  priceList: [],
  ordersWithAmount: [],
  ordersList: [],
  paymentsList: [],
});

export default store;
