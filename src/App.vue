<template>
  <div class="window">
    <Tabs :showPlus="true"></Tabs>
    <Results :right="result"></Results>
  </div>

</template>

<script>

import Tabs from './components/Tabs/Tabs'
import Results from './components/Results/Results'

import json from './components/Result/ES.json';

export default {
  data() {
    return {
      result: JSON.stringify(json, null, '\t')
    }
  },
  components: {
    Tabs, Results
  },

}
</script>
