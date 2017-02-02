<template>
<div class="tab-group">
  <Tab v-for="tab in tabs" :data="tab"></Tab>
  <div class="tab-item tab-item-fixed" v-if="showPlus" @click="newTab">
    <span class="icon icon-plus"></span>
  </div>
</div>

</template>

<script>

import Tab from '../Tab/Tab'

export default {
  props: {
    showPlus: {
      type: Boolean,
      default: false
    },
    tabs: {
      type: Array
    }
  },
  methods: {
    newTab() {
      console.log('new');
    }
  },
	components: {
		Tab
	}
}
</script>

