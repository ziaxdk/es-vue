<template>
  <div class="window">
    <Tabs :showPlus="true"></Tabs>
    <div class="window-content">
      <Result :output="result" :indent="2"></Result>
    </div>
  </div>

</template>

<script>

import Tabs from './components/Tabs/Tabs'
import Result from './components/Result/Result'

import json from './components/Result/TEST.json';

export default {
  data() {
    return {
      result: JSON.stringify(json, null, '\t')
    }
  },
  components: {
    Tabs, Result
  },

}
</script>

