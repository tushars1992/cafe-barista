<template>
  <div class="bg-gray-50 px-4">
    <div class="p-2 text-gray-800 text-justify">
      <div
        id="tile-content-header"
        class="flex justify-between border-b border-gray-300 py-3"
        v-if="!isOrderView"
      >
        <span class="flex-1 px-2">No</span>
        <span class="flex-1 whitespace-no-wrap break-all px-2">Drink</span>
        <span class="flex-1 px-2">Size</span>
        <span class="flex-1 px-2">Amount</span>
      </div>
      <div
        v-for="(order, index) in orders"
        :key="index"
        class="flex justify-between py-3 border-b border-gray-300 last:border-0"
      >
        <span class="flex-1 px-2">{{ index + 1 }}</span>
        <span class="flex-1 px-2" v-if="isOrderView">{{
          order.user | capitalize
        }}</span>
        <span class="flex-1 whitespace-no-wrap break-all px-2">{{
          order.drink | capitalize
        }}</span>
        <span class="flex-1 px-2">{{ order.size | capitalize }}</span>
        <span class="flex-1 px-2"> {{ order.amount | amount }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TileContent',
  props: ['orders', 'isOrderView'],
};
</script>
