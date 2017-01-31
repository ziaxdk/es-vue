<template>
  <div class="window-content">

    <div class="flex-item" v-bind:style="{ width: leftSize + 'px' }">
      <Editor :theme="'tomorrow'"></Editor>
    </div>

    <Divider v-model="leftSize"></Divider>

    <div class="flex-item" v-bind:style="{ width: rightSize + 'px' }">
      <Result :output="result" :indent="2"></Result>
    </div>

  </div>
</template>

<script>

import Editor from '../Editor/Editor'
import Result from '../Result/Result'
import Divider from '../Divider/Divider'

import json from '../Result/ES.json';

export default {
  data() {
    return {
      leftSize: 0,
      result: JSON.stringify(json, null, '\t')
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
