<template>
  <div class="home max-w-screen-lg mx-auto">
    <ErrorBlock v-if="isError" @reload="loadData"></ErrorBlock>
    <div v-else>
      <Table>
        <div class="flex flex-1 justify-between">
          <span class="flex-1 px-2 text-left">Name</span>
          <span class="flex-1 px-2 text-left"> Total Bill</span>
          <span class="flex-1 px-2 text-left"> Total Paid</span>
          <span class="flex-1 px-2 text-left">Total Owe's</span>
        </div>
        <div class="h-8 w-8 absolute"></div>
        <div slot="content">
          <Tile
            v-for="(user, index) in Object.keys(usersList)"
            :key="index"
            :user="usersList[user]"
            :name="user"
          >
          </Tile>
        </div>
      </Table>
      <div class="flex justify-end flex-col items-end m-8">
        <button
          id="export-button"
          @click="exportData"
          class="
            h-12
            w-40
            mt-1
            rounded-md
            text-gray-800
            bg-gray-400
            text-white
            flex
            items-center
            justify-center
            font-bold
          "
        >
          Export
        </button>
        <textarea
          id="export-content"
          v-if="isExport"
          class="w-full h-40 block mt-6"
          :value="resultInString"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import Tile from '@/components/Tile.vue';
import Table from '@/components/Table.vue';
import ErrorBlock from '@/components/ErrorBlock.vue';
import { getOrdersWithAmount, fetchPaymentsList } from '@/utilities';

export default {
  name: 'Home',
  components: { Tile, Table, ErrorBlock },
  data() {
    return {
      ordersWithAmount: [],
      usersList: [],
      resultInString: '',
      isError: false,
      isExport: false,
    };
  },
  methods: {
    async loadData() {
      try {
        const orderslist = await getOrdersWithAmount();
        const userData = this.groupByUserName(orderslist);
        this.appendTotalPaymentAndPending(userData);
        this.isError = false;
      } catch (_) {
        this.isError = true;
      }
    },
    groupByUserName(list) {
      return list.reduce((userObj, obj) => {
        userObj[obj.user] = userObj[obj.user] || {
          totalBill: 0,
          totalPaid: 0,
          totalPending: 0,
          orders: [],
        };
        userObj[obj.user].orders.push(obj);
        userObj[obj.user].totalBill += obj.amount;
        return userObj;
      }, {});
    },
    async appendTotalPaymentAndPending(data) {
      const paymentsList = await fetchPaymentsList();
      if (paymentsList.length) {
        this.usersList = paymentsList.reduce((obj, payment) => {
          obj[payment.user].totalPaid =
            (obj[payment.user].totalPaid || 0) + payment.amount;
          obj[payment.user].totalPending =
            obj[payment.user].totalBill - obj[payment.user].totalPaid;
          return obj;
        }, data);
      }
    },
    exportData() {
      this.isExport = true;
      this.resultInString = JSON.stringify(this.usersList);
    },
  },
  created() {
    this.loadData();
  },
};
</script>
