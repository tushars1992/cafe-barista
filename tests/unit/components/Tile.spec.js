import { shallowMount } from '@vue/test-utils';
import Tile from '@/components/Tile.vue';
import TileContent from '@/components/TileContent.vue';
import TileHeader from '@/components/TileHeader.vue';

const user = {};
const name = 'Sam';
const wrapper = shallowMount(Tile, {
  propsData: { user, name },
  stubs: ['TileContent', 'TileHeader'],
});

describe('Tile.vue', () => {
  it('Tile Content Should not be visible at load', () => {
    const contentTile = wrapper.findComponent(TileContent);
    expect(contentTile.isVisible()).toBeFalsy();
  });

  it('Tile Content Should be visible on click', async () => {
    const header = wrapper.findComponent(TileHeader);
    const contentTile = wrapper.findComponent(TileContent);
    await header.trigger('click');
    expect(contentTile.isVisible()).toBeTruthy();
  });
});
