<template>
  <div class="group outline-none accordion-section" tabindex="1">
    <TileHeader
      :name="name"
      :bill="user.totalBill"
      :payment="user.totalPaid"
      :pending="user.totalPending"
      :is-open="isOpen"
      @click.native="toggleContent"
    />
    <TileContent :orders="user.orders" :is-order-view="false" v-show="isOpen" />
  </div>
</template>

<script>
import TileHeader from '@/components/TileHeader.vue';
import TileContent from '@/components/TileContent.vue';
export default {
  name: 'UserTile',
  components: {
    TileHeader,
    TileContent,
  },
  props: ['user', 'name'],
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleContent() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
