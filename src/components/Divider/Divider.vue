<template>
  <div class="divider" @mousedown="down">
  </div>
</template>

<script>

export default {
  props: {
    value: {
      type: Number
    }
  },
  methods: {
    down() {
      document.addEventListener('mousemove', this.update);
      document.addEventListener('mouseup', this.up);
    },
    up() {
      document.removeEventListener('mousemove', this.update);
      document.removeEventListener('mouseup', this.up);
    },
    update(value) {
      this.$emit('input', value.screenX);
    }
  }
}

</script>

<style scoped>
  .divider {
    cursor: ew-resize;
    width: 8px;
    background-color: #eee;

    -moz-transition: all .2s ease-in;
    -o-transition: all .2s ease-in;
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
  }
  .divider:hover {
    background-color: #ccc;
  }
</style>
