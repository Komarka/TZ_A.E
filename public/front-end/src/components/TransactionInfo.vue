<template>
  <div class="transactionInfo d-flex flex-column">
    <h1>Transaction info</h1>
    <span >ID: <span class="font-weight-bold">{{transaction._id}}</span></span>
    <span>Type: <span class="font-weight-bold">{{transaction.type}}</span></span>
    <span>Amount: <span class="font-weight-bold">{{transaction.amount}}</span></span>
    <span class="font-weight-bold" style="color:red;" v-if="transaction.canceled">Canceled</span>
  </div>
</template>

<script>

import { transactionInfoBus } from '@EventBus';



export default {
  name: 'TransactionInfo',
  data () {
    return {
      transaction: {}
    }
  },
  mounted() {
      transactionInfoBus.$on('transactionInfo', (transaction) => {
      this.transaction = transaction;
    })
  }
}
</script>

<style scoped>
    .transactionInfo {
        margin-top:53px;
        padding:10px;
        border:5px solid orange
    }

</style>




