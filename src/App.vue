<template>
  <div class="window">
    <Tabs :showPlus="true"></Tabs>
    <Results></Results>
  </div>

</template>

<script>

import Tabs from './components/Tabs/Tabs'
import Results from './components/Results/Results'

export default {
  components: {
    Tabs, Results
  },

}
</script>
