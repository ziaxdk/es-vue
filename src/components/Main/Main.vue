<template>
	<div v-html="formattedMessage"></div>
</template>

<script>
import { pretty } from 'js-object-pretty-print'

export default {
	props: {
    data: {
      default: 'no data'
    }
  },
  computed: {
    formattedMessage: function() {
      return pretty(this.data, 4, "HTML");
    }
  },
	mounted() {
		// console.log('mounted', pretty(json));
	}
}

</script>

