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
  mounted() {
    document.addEventListener('mousemove', this.update);
    document.addEventListener('mouseup', this.up);
  },
  destroyed() {
    document.removeEventListener('mousemove', this.update);
    document.removeEventListener('mouseup', this.up);

  },
  methods: {
    down() {
      this._isPressed = true;
    },
    up() {
      this._isPressed = false;
    },
    update(value) {
      if (!!this._isPressed) {
        this.$emit('input', value.screenX);
      }
    }
  }
}

</script>

<style scoped>
  .divider {
    cursor: ew-resize;
    width: 4px;
    background-color: #eee;
  }
</style>
