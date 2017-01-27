<template>
  <div class="divider" v-on:mousedown="down"  v-on:mouseup="up">
  </div>
</template>

<script>

export default {
  props: {
    leftSize: {
      type: String
    },
    rightSize: {
      type: String
    }
  },
  methods: {
    down() {
      this.leftSize = '20%'
      this.rightSize = '80%'
    },
    up() {
      console.log('up');
    }
  }
}

</script>

<style scoped>
  .divider {
    cursor: ew-resize;
    width: 10px;
    background-color: #eee;
  }
</style>
