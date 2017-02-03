<template>
  <div class="tab-item active" :title="data.uri" @dblclick="$emit('onEditHost')">
    <span class="icon icon-cancel icon-close-tab"></span>
    <span class="icon icon-record" style="color:#34c84a"></span>
    <span>{{data.name}}</span>
  </div>
</template>

<script>


export default {
	props: {
		data: {
			type: Object
		}
	}
}
</script>

