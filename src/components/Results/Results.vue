<template>
  <div class="window-content">

    <div class="flex-item" :style="{ width: leftSize + 'px' }">
      <Editor
        :theme="'tomorrow'"
        :executeKey="executeKey"
        @onExecute="OnExecute"></Editor>
    </div>

    <Divider v-model="leftSize"></Divider>

    <div class="flex-item" :style="{ width: rightSize + 'px' }">
      <Result
        :output="result"
        :indent="2"
        :executeKey="executeKey"></Result>
    </div>

  </div>
</template>

<script>

import Editor from '../Editor/Editor'
import Result from '../Result/Result'
import Divider from '../Divider/Divider'
import { run } from '../../store.js'

export default {
  props: {
    activeHost: {
      type: Object,
      required: true
    },
    executeKey: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      leftSize: 0,
      result: '{ "no": "data yet. Hit \'' + this.executeKey.toUpperCase() + '\'" }'
    }
  },
  mounted() {
    var width = this.$el.clientWidth;
    this.leftSize = Math.floor(width * 0.35);
    this.rightSize = width - this.leftSize;
    this._size = width;
  },
  computed: {
    rightSize: function() {
      return this._size - this.leftSize;
    }
  },
  methods: {
    async OnExecute(data) {
      let result = await run(this.activeHost.uri, data);
      this.result = JSON.stringify(result, null, '\t')
    }
  },
  components: {
    Editor, Result, Divider
  }
}
</script>

<style scoped>
  .flex-item {
    position: relative;
  }
</style>
