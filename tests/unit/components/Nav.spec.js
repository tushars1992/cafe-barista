import { mount } from '@vue/test-utils';
import Nav from '@/components/Nav.vue';

const wrapper = mount(Nav, { stubs: ['router-link'] });

describe('Nav.vue', () => {
  it('should contain three router-links', () => {
    const routerLinkList = wrapper.findAll('#link');
    expect(routerLinkList.length).toEqual(3);
  });
});
