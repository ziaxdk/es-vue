<template>
  <div class="window">
    <Tabs :showPlus="true"></Tabs>
    <div class="window-content">
      <div class="pane">
        <Result :output="result" :indent="2"></Result>
      </div>

<!--       <div class="pane-group">
        <div class="pane-sm sidebar">
          <Navs></Navs>
        </div>
        <div class="pane">
          <Main :data="data"></Main>
        </div>
      </div>
 -->    </div>
  </div>

</template>

<script>

import Tabs from './components/Tabs/Tabs'
import Navs from './components/Navs/Navs'
import Result from './components/Result/Result'

import json from './components/Result/ES.json';

export default {
  data() {
    var result = JSON.stringify(json, null, '\t');
    return {
      result
    }
  },
  components: {
    Tabs, Navs, Result
  },

}
</script>

