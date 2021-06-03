import axios from 'axios';
import store from '@/store';
import { ORDERS_URL, PAYMENTS_URL, PRICES_URL } from '@/constants';

async function fetchData(url) {
  const response = await axios.get(url);
  return response.data;
}

export async function fetchPriceList() {
  if (!store.priceList.length) {
    store.priceList = await fetchData(PRICES_URL);
  }
  return store.priceList;
}

export async function fetchOrdersList() {
  console.log('store.ordersList');
  console.log(!store.ordersList.length);
  console.log(store.ordersList);
  if (!store.ordersList.length) {
    console.log('inside list');
    store.ordersList = await fetchData(ORDERS_URL);
  }
  return store.ordersList;
}

export async function fetchPaymentsList() {
  if (!store.paymentsList.length) {
    store.paymentsList = await fetchData(PAYMENTS_URL);
  }
  return store.paymentsList;
}

export async function getOrdersWithAmount() {
  const orders = await fetchOrdersList();
  const prices = await fetchPriceList();
  return orders.map((order) => {
    const drinkObj = prices.find((drink) => drink.drink_name === order.drink);
    order.amount = drinkObj.prices[order.size];
    return order;
  });
}
