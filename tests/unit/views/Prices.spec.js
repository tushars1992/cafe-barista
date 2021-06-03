import { shallowMount, createLocalVue } from '@vue/test-utils';
import Prices from '@/views/Prices.vue';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import prices from '../../../stub/data/prices.json';
import flushPromises from 'flush-promises';
import ErrorBlock from '@/components/ErrorBlock.vue';
import { PRICES_URL } from '@/constants';
import store from '@/store';
import { capitalize, formatAmount } from '@/utilities/filters';

const mock = new MockAdapter(axios);

mock.onGet(PRICES_URL).reply(200, prices);

const localVue = createLocalVue();
localVue.filter('capitalize', capitalize);
localVue.filter('amount', formatAmount);

const wrapper = shallowMount(Prices, { localVue });

describe('Prices.vue', () => {
  it('ErrorBlock should not be present when services are running', async () => {
    await flushPromises();
    const errorBlock = wrapper.findComponent(ErrorBlock);
    expect(errorBlock.exists()).toBeFalsy();
  });

  it('ErrorBlock should not be present when services are running', async () => {
    store.priceList = [];
    const wrapper = shallowMount(Prices);
    mock.onGet(PRICES_URL).reply(500, prices);
    await flushPromises();
    const errorBlock = wrapper.findComponent(ErrorBlock);

    expect(errorBlock.exists()).toBeTruthy();
  });
});
