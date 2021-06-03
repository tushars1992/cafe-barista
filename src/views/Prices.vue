<template>
  <div class="orders max-w-screen-lg mx-auto">
    <ErrorBlock v-if="isError" @reload="loadData"></ErrorBlock>
    <Table v-else>
      <div class="flex flex-1 justify-between">
        <span class="flex-1 text-left"> Drink</span>
        <span class="flex-1 text-right"> Size</span>
        <span class="flex-1 text-right">Amount</span>
      </div>
      <div slot="content">
        <div
          v-for="(drink, index) in priceList"
          :key="index"
          class="p-2 text-gray-800 text-justify bg-gray-50 px-4"
        >
          <div
            v-for="(item, index1) in Object.keys(drink.prices)"
            :key="index1"
            class="flex justify-between py-3 border-b border-gray-300"
          >
            <span class="flex-1 px-2 whitespace-no-wrap break-all">{{
              drink.drink_name | capitalize
            }}</span>
            <span class="flex-1 px-2 text-right"> {{ item | capitalize }}</span>
            <span class="flex-1 text-right"> € {{ drink.prices[item] }}</span>
          </div>
        </div>
      </div>
    </Table>
  </div>
</template>

<script>
import Table from '../components/Table.vue';
import ErrorBlock from '../components/ErrorBlock.vue';
import { fetchPriceList } from '@/utilities';
export default {
  components: { Table, ErrorBlock },
  name: 'Prices',
  data() {
    return {
      priceList: [],
      isError: false,
    };
  },
  methods: {
    async loadData() {
      try {
        this.priceList = await fetchPriceList();
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
