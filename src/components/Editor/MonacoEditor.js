import Editor from "@monaco-editor/react";

function MonacoEditor({...rest}) {
  return (
    <Editor
      height="90vh"
      defaultLanguage="markdown"
      {...rest}
    />
  )
}

export default MonacoEditor