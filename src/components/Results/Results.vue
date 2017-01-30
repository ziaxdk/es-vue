<template>
  <div class="window-content">

    <div class="flex-item" v-bind:style="{ width: leftSize + 'px' }">
      <Editor :theme="'tomorrow'"></Editor>
    </div>

    <Divider v-model="leftSize"></Divider>

    <div class="flex-item" v-bind:style="{ width: rightSize + 'px' }">
      <Result :output="right" :indent="2"></Result>
    </div>

  </div>
</template>

<script>

import Editor from '../Editor/Editor'
import Result from '../Result/Result'
import Divider from '../Divider/Divider'

export default {
  data() {
    return {
      leftSize: 0
    }
  },
  mounted() {
    var width = this.$el.clientWidth;
    this.leftSize = Math.floor(width * 0.35);
    this.rightSize = width - this.leftSize;
    this._size = width;
  },
  props: {
    right: {
      type: String
    }
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
