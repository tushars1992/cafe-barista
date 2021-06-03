import { shallowMount } from '@vue/test-utils';
import Orders from '@/views/Orders.vue';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import orders from '../../../stub/data/orders.json';
import prices from '../../../stub/data/prices.json';
import flushPromises from 'flush-promises';
import ErrorBlock from '@/components/ErrorBlock.vue';
import { ORDERS_URL, PRICES_URL } from '@/constants';
import store from '@/store';

const mock = new MockAdapter(axios);

mock.onGet(ORDERS_URL).reply(200, orders);
mock.onGet(PRICES_URL).reply(200, prices);
const wrapper = shallowMount(Orders);

describe('Orders.vue', () => {
  it('ErrorBlock should not be present when services are running', async () => {
    await flushPromises();
    const errorBlock = wrapper.findComponent(ErrorBlock);
    expect(errorBlock.exists()).toBeFalsy();
  });

  it('ErrorBlock should not be present when services are running', async () => {
    store.priceList = [];
    store.ordersWithAmount = [];
    store.paymentsList = [];
    store.ordersList = [];
    const wrapper = shallowMount(Orders);
    mock.onGet(ORDERS_URL).reply(500, orders);
    await flushPromises();
    const errorBlock = wrapper.findComponent(ErrorBlock);

    expect(errorBlock.exists()).toBeTruthy();
  });
});
