import { shallowMount, createLocalVue } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import orders from '../../../stub/data/orders.json';
import payments from '../../../stub/data/payments.json';
import prices from '../../../stub/data/prices.json';
import flushPromises from 'flush-promises';
import Tile from '@/components/Tile.vue';
import ErrorBlock from '@/components/ErrorBlock.vue';
import { ORDERS_URL, PAYMENTS_URL, PRICES_URL } from '@/constants';
import store from '@/store';
import { capitalize, formatAmount } from '@/utilities/filters';

const mock = new MockAdapter(axios);

mock.onGet(ORDERS_URL).reply(200, orders);
mock.onGet(PAYMENTS_URL).reply(200, payments);
mock.onGet(PRICES_URL).reply(200, prices);

const localVue = createLocalVue();
localVue.filter('capitalize', capitalize);
localVue.filter('amount', formatAmount);
const wrapper = shallowMount(Home, { localVue });

describe('Home.vue', () => {
  it('ErrorBlock should not be present when services are running', async () => {
    await flushPromises();
    const errorBlock = wrapper.findComponent(ErrorBlock);
    expect(errorBlock.exists()).toBeFalsy();
  });

  it('On Export click textarea should be displayed with JSON string data', async () => {
    const exportButton = wrapper.find('#export-button');
    await exportButton.trigger('click');
    const textArea = wrapper.find('#export-content');
    expect(textArea.exists()).toBeTruthy();
  });

  it('Validate Tile Props', async () => {
    const tileComponent = wrapper.findAllComponents(Tile).at(0);
    expect(tileComponent.props().name).toBe('coach');
    expect(tileComponent.props().user.totalBill).toBe(73);
    expect(tileComponent.props().user.totalPaid).toBe(69);
    expect(tileComponent.props().user.totalPending).toBe(4);
  });

  it('ErrorBlock should not be present when services are running', async () => {
    store.priceList = [];
    (store.ordersWithAmount = []), (store.paymentsList = []);
    store.ordersList = [];
    const wrapper = shallowMount(Home);
    mock.onGet(ORDERS_URL).reply(500, orders);
    await flushPromises();
    const errorBlock = wrapper.findComponent(ErrorBlock);

    expect(errorBlock.exists()).toBeTruthy();
  });
});
