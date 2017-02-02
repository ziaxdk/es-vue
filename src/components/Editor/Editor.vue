<template>
  <div>
  	<div id="editor" class="editor"></div>
  </div>
</template>

<script>
// import { pretty } from 'js-object-pretty-print'
// import ace from 'ace-code-editor'

export default {
  data() {
    return {
      editor: null
    }
  },
	props: {
    indent: {
      type: Number,
      default: 4
    },
    theme: {
      type: String,
      default: 'iplastic'
    },
    executeKey: {
      type: String,
      required: true
    }
  },
  mounted() {
    var langTools = ace.require('ace/ext/language_tools');
    var aceUtils = ace.require('ace/autocomplete/util');
    var aceAutoComplete = ace.require('ace/autocomplete');

    let editor = ace.edit("editor");
    this.editor = editor;
    editor.$blockScrolling = Infinity;
    editor.setTheme("ace/theme/" + this.theme);
    editor.getSession().setMode("ace/mode/json");
    editor.getSession().setTabSize(this.indent);
    editor.setDisplayIndentGuides(true);
    editor.setShowPrintMargin(false);
    editor.renderer.setShowGutter(false);

    // editor.setOptions({
    //   // enableBasicAutocompletion: true
    //   enableBasicAutocompletion: true,
    //   enableSnippets: true,
    //   enableLiveAutocompletion: true
    // });
    // var completer = {
    //   getCompletions: function(editor, session, pos, prefix, callback) {
    //     console.log(arguments)
    //     if (prefix.length === 0) return callback(null, []);
    //     callback(null, [ {name: 'test', value: 'test', score: 100, meta: "rhyme"} ]);
    //   }
    // }
    // langTools.addCompleter(completer);

    editor.setValue('GET /_search');

    editor.commands.addCommand({
      name: "runQuery",
      // bindKey: {win: "Ctrl-Alt-h", mac: "Command-Alt-h"},
      bindKey: { win: this.executeKey, mac: this.executeKey },
      exec: this.runQuery
    });
  },
  methods: {
    runQuery() {
      this.$emit('onExecute', this.editor.getValue());
    }
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

