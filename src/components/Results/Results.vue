<template>
  <div class="window-content">

    <div class="flex-item" v-bind:style="{ width: leftSize }">
      <Editor :theme="'tomorrow'"></Editor>
    </div>

    <Divider :left="leftSize" right="rightSize"></Divider>

    <div class="flex-item" v-bind:style="{ width: rightSize }">
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
      leftSize: '40%',
      rightSize: '60%'
    }
  },
  props: {
    right: {
      type: String
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
