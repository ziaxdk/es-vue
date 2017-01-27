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
	    indent: {
	      type: Number,
	      default: 4
	    },
	    theme: {
	      type: String,
	      default: 'iplastic'
	    }
  },
  mounted() {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/" + this.theme);
    editor.getSession().setMode("ace/mode/json");
    editor.getSession().setTabSize(this.indent);
    editor.setDisplayIndentGuides(true);
    editor.setShowPrintMargin(false);
    editor.renderer.setShowGutter(false);
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

