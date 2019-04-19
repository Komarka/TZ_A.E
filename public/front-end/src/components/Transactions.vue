<template>
  <div>
    <h1>Transactions</h1>
    <div>
        <button @click="creditOp" type="button" class="btn btn-success">Emit Credit Operation</button>
        <button  @click="debitOp" type="button" class="btn btn-danger">Emit Debit Operation</button>
    </div>
    <div v-if="transactions.length > 0" class="transactions d-flex justify-content-between">
      <div v-for="t in transactions" :key="t._id" >
          <button @click="transactionInfo(t)" type="button" :class="['btn' , { 'btn-danger': t.canceled,'btn-success':t.type === 'credit','btn-warning': t.type === 'debit' } ]">
            {{t.type}}
          <span class="badge badge-secondary">{{ t.amount }}$</span>
          </button>

      </div>
    </div>
    <div v-else class="alert alert-secondary" role="alert">
      No transactions!
    </div>
  </div>
</template>

<script>
import { transactionBus, transactionInfoBus } from '@EventBus';

export default {
  name: 'Transactions',
  data () {
    return {
      transactions: []
    }
  },
  methods: {
    transactionInfo(transaction) {
        transactionInfoBus.$emit('transactionInfo', transaction);
    },

    async creditOp() {
     await this.$http.post('http://localhost:3000/transaction/credit', this.createOpObj('credit'));
      await this.getTransactions();
      transactionBus.$emit('transactionsChanged');
    },
    async debitOp() {
     await this.$http.post('http://localhost:3000/transaction/debit', this.createOpObj('debit'));
      await this.getTransactions();
      transactionBus.$emit('transactionsChanged');
    },
    createOpObj(type) {
        return {
          type,
          amount: Math.floor( Math.random () * (1000 - 500 + 1) + 500),
        }
    },

    async getTransactions(){
      const  {data: { transactions }} = await this.$http.get('http://localhost:3000/transactions');
      this.transactions = transactions;
    }
  },  
   created() {
      this.getTransactions();
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .transactions {
    border: 4px double grey;
    padding:5px;
    margin-top: 50px;
    width: 314px;
    height: 400px;
    overflow-y: scroll;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-line-pack: justify;
    align-content: flex-start;
}

.transactions > div {
  margin-bottom:10px;
}

  .alert {
    margin-top: 10px;
  }
</style>
