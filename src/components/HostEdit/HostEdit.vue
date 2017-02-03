<template>
  <div>
    <div class="abs overlay"></div>
    <div class="abs content">
      <div class="window">

        <header class="toolbar toolbar-header">
          <h1 class="title">Host</h1>
        </header>

        <form class="form" @submit.prevent="submit">
          <div class="form-group">
            <label>Name:</label>
            <input type="text" class="form-control" placeholder="Name" v-model="entry.name">
          </div>
          <div class="form-group">
            <label>Uri:</label>
            <input type="text" class="form-control" placeholder="Uri" v-model="entry.uri">
          </div>

          <button class="btn btn-mini btn-default">Cancel</button>
          <button class="btn btn-mini btn-primary">Ok</button>

        </form>

      </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      entry: {
        uri: null,
        name: null
      }
    }
  },
	props: {
    data: {
      type: Object
    }
	},
  mounted() {
    this.entry = { ...this.data };
  },
  methods: {
    submit() {
      this.$emit('onSave', this.entry);
    }
  }
}
</script>


<style scoped>
  .abs {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .overlay {
    background-color: white;
    z-index: 10000;
    opacity: 0.7;
  }
  .content {
    z-index: 10001;
  }
  .window {
    border: 1px solid #ccc;
    width: 400px;
    height: 200px;
    margin: auto;
  }
  .form {
    padding: 6px;
  }
</style>

