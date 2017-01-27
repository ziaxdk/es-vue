<template>
  <div class="window">
    <Tabs :showPlus="true"></Tabs>
    <div class="window-content">
      <div class="pane-group">
        <div class="pane-sm sidebar">
          <Navs></Navs>
        </div>
        <div class="pane">
          <Main :data="data"></Main>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import Tabs from './components/Tabs/Tabs'
import Navs from './components/Navs/Navs'
import Main from './components/Main/Main'

import json from './components/Main/ES.json';

export default {
  props: {
    data: {
      default: json
    }
  },
  components: {
    Tabs, Navs, Main
  },

}
</script>

