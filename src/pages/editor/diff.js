import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

export default function diff() {
  return (
    <Editor
      height="90vh"
      defaultLanguage="javascript"
      defaultValue="// some comment"
    />
  );
}
