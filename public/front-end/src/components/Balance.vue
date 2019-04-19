<template>
  <div>
    <h1>Balance</h1>
    <div>
    <span class="text-monospace">Current Balance:</span>
    <span class="badge badge-secondary">{{ balance }}$</span>
    <transaction-info/>
    </div>
  </div>
</template>

<script>
import TransactionInfo from "@components/TransactionInfo"
import { transactionBus } from '@EventBus';

export default {
  name: 'Balance',
   components: {
    'transaction-info': TransactionInfo,
  },
  data () {
    return {
      balance: ''
    }
  },
  methods: {
    async  getBalance() {
      const {data: {result: { balance } }} = await this.$http.get('http://localhost:3000/balance')
      this.balance = balance;
    }
  },
   created() {
      this.getBalance();
  },
    mounted () {
    transactionBus.$on('transactionsChanged', () => {
      this.getBalance();
    })
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
