<template>
  <div>
  	<div id="editor" class="editor"></div>
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
      default: 10
    },
    theme: {
      type: String,
      default: 'iplastic'
    }
  },
  watch: {
    output(val) {
      console.log('watch', val, editor);
    }
  },
  methods: {
    update(val) {
      editor.setValue(val);
    }
  },
  // computed: {
  //   formattedMessage: function() {
  //     // return pretty(this.data, 4, "HTML");
  //     // console.log(ace)
  //     // return this.data;
  //     console.log(editor, this.data)
  //     return this.data;

  //   }
  // },
  mounted() {
    editor = ace.edit("editor");
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

