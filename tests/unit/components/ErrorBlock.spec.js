import { shallowMount } from '@vue/test-utils';
import ErrorBlock from '@/components/ErrorBlock.vue';
const wrapper = shallowMount(ErrorBlock, { stubs: ['font-awesome-icon'] });

describe('ErrorBlock.vue', () => {
  it('Error block should contain Error Message', () => {
    const msg = wrapper.find('p').text();
    expect(msg).toBe('Something went wrong please reload');
  });

  it('On click off Reload Button reload event should emit', async () => {
    const button = wrapper.find('button');
    const emitSpy = jest.spyOn(wrapper.vm, '$emit');
    await button.trigger('click');
    expect(emitSpy).toHaveBeenCalledWith('reload');
  });
});
