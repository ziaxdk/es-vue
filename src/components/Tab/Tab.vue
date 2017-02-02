<template>
  <div class="tab-item active" :title="data.uri">
    <span class="icon icon-cancel icon-close-tab"></span>
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

