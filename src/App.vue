<template>
  <div class="window">
    <Tabs :showPlus="true" :tabs="tabs"></Tabs>
    <Results :activeHost="activeTab" :executeKey="executeKey"></Results>
  </div>

</template>

<script>

import Tabs from './components/Tabs/Tabs'
import Results from './components/Results/Results'

export default {
  data() {
    return {
      tabs: [
        { uri: 'http://localhost:9200', name: 'localhost' }
      ],
      executeKey: 'f6'
    }
  },
  computed:{
    activeTab() {
      return this.tabs[0];
    }
  },
  components: {
    Tabs, Results
  },

}
</script>
