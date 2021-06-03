<template>
  <div
    class="
      bg-gray-300
      flex
      justify-between
      px-4
      py-5
      items-center
      text-gray-800
      cursor-pointer
      pr-10
      relative
      font-bold
      border border-b border-gray-400
    "
  >
    <div class="flex flex-1 justify-between text-left">
      <span class="flex-1 px-2">{{ this.name | capitalize }}</span>
      <span class="flex-1 px-2">{{ this.bill | amount }}</span>
      <span class="flex-1 px-2">{{ this.payment | amount }}</span>
      <span class="flex-1 px-2">{{ this.pending | amount }}</span>
    </div>
    <div
      class="
        h-8
        w-8
        items-center
        inline-flex
        justify-center
        absolute
        right-2 right-0
        m-auto
      "
    >
      <font-awesome-icon :icon="isOpen ? 'chevron-up' : 'chevron-down'" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TileHeader',
  props: ['name', 'bill', 'payment', 'pending', 'isOpen'],
};
</script>
