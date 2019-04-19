<template>
  <div class="d-flex justify-content-around">
    <transactions/>
    <balance/>
  </div>
</template>

<script>

import Balance from '@components/Balance';
import Transactions from '@components/Transactions';


export default {
  name: 'HomePage',
  components: {
    'balance': Balance,
    'transactions': Transactions
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>




