<template>
<div class="tab-group">
  <Tab></Tab>
  <div class="tab-item tab-item-fixed" v-if="showPlus">
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
    }
  },
	components: {
		Tab
	}
}
</script>

