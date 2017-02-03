<template>
  <div class="window">
    <Tabs
      :showPlus="true"
      :tabs="tabs"
      @onEditHost="onEditHost"></Tabs>
    <Results
      :activeHost="activeTab"
      :executeKey="executeKey"></Results>
    <HostEdit
      :data="host"
      @onSave="onHostEditSave"
      v-if="showEditHost"></HostEdit>
  </div>

</template>

<script>

import Tabs from './components/Tabs/Tabs'
import Results from './components/Results/Results'
import HostEdit from './components/HostEdit/HostEdit'

export default {
  data() {
    return {
      tabs: [
        { uri: 'http://localhost:9200', name: 'localhost' }
      ],
      executeKey: 'f6',
      showEditHost: false
    }
  },
  computed:{
    activeTab() {
      return this.tabs[0];
    },
    host: {
      get() {
        return this.tabs[0];
      },
      set(value) {
        this.tabs[0].name = value.name;
        this.tabs[0].uri = value.uri;
      }
    }
  },
  methods: {
    onEditHost(tabHost) {
      this.showEditHost = true;
    },
    onHostEditSave(data) {
      this.showEditHost = false;
      this.host = data;
    }
  },
  components: {
    Tabs, Results, HostEdit
  },

}
</script>

<style>
</style>