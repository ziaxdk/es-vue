<template>
  <div>
  	<div id="result" class="editor"></div>
  </div>
</template>

<script>
// import { pretty } from 'js-object-pretty-print'
// import ace from 'ace-code-editor'
var editor;

export default {
	props: {
    output: {
      type: String,
      default: 'no data'
    },
    indent: {
      type: Number,
      default: 4
    },
    theme: {
      type: String,
      default: 'iplastic'
    }
  },
  watch: {
    output(val) {
      this.update(val);
    }
  },
  methods: {
    update(val) {
      editor.setValue(val, -1);
    }
  },
  mounted() {
    editor = ace.edit("result");
    editor.$blockScrolling = Infinity;
    editor.setTheme("ace/theme/" + this.theme);
    editor.getSession().setMode("ace/mode/json");
    editor.getSession().setTabSize(this.indent);
    editor.setReadOnly(true);
    editor.setDisplayIndentGuides(true);
    editor.setShowPrintMargin(false);

    this.update(this.output);
  }
}

</script>

<style scoped>
  .editor {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
</style>

