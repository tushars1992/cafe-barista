<template>
  <div class="orders max-w-screen-lg mx-auto">
    <ErrorBlock v-if="isError" @reload="loadData"></ErrorBlock>
    <Table v-else>
      <div class="flex flex-1 px-2 justify-between">
        <span class="flex-1 px-2 text-left">No</span>
        <span class="flex-1 px-2 text-left">Name</span>
        <span class="flex-1 px-2 text-left"> Drink</span>
        <span class="flex-1 px-2 text-left"> Size</span>
        <span class="flex-1 px-2 text-left">Amount</span>
      </div>
      <div class="h-8 w-8 absolute"></div>
      <div slot="content">
        <TileContent :orders="ordersList" :is-order-view="true"></TileContent>
      </div>
    </Table>
  </div>
</template>

<script>
import TileContent from '@/components/TileContent.vue';
import Table from '@/components/Table.vue';
import ErrorBlock from '@/components/ErrorBlock.vue';
import { getOrdersWithAmount } from '@/utilities';

export default {
  name: 'Orders',
  components: { TileContent, Table, ErrorBlock },
  data() {
    return {
      ordersList: [],
      isError: false,
    };
  },
  methods: {
    async loadData() {
      try {
        this.ordersList = await getOrdersWithAmount();
        this.isError = false;
      } catch (_) {
        this.isError = true;
      }
    },
  },
  async created() {
    await this.loadData();
  },
};
</script>
