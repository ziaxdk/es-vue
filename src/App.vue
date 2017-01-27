<template>
  <div class="window">
    <Tabs :showPlus="true"></Tabs>
    <div class="window-content">
      <div class="pane-group">
        <div class="pane-sm sidebar">
          <Navs></Navs>
        </div>
        <div class="pane">
          <Main></Main>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import Tabs from './components/Tabs/Tabs'
import Navs from './components/Navs/Navs'
import Main from './components/Main/Main'

export default {
  components: {
    Tabs, Navs, Main
  }
}
</script>

