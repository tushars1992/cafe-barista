import { shallowMount, createLocalVue } from '@vue/test-utils';
import TileContent from '@/components/TileContent.vue';
import { capitalize, formatAmount } from '@/utilities/filters';

const localVue = createLocalVue();
localVue.filter('capitalize', capitalize);
localVue.filter('amount', formatAmount);

const orders = [
  { user: 'Sam', drink: 'latte', size: 'small', amount: 3 },
  { user: 'Alice', drink: 'tea', size: 'small', amount: 4 },
];
let isOrderView = false;
describe('TileContent.vue', () => {
  it('Header should be present when isOrderView is false', () => {
    const wrapper = shallowMount(TileContent, {
      localVue,
      propsData: { orders, isOrderView },
    });
    const header = wrapper.find('#tile-content-header');
    expect(header.exists()).toBeTruthy();
  });

  it('Header should not be present when isOrderView is true', () => {
    isOrderView = true;
    const wrapper = shallowMount(TileContent, {
      localVue,
      propsData: { orders, isOrderView },
    });
    const header = wrapper.find('#tile-content-header');
    expect(header.exists()).toBeFalsy();
  });
});
