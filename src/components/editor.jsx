import  { useEffect, useRef } from "react";
import { EditorView, basicSetup } from "codemirror";
import { EditorState } from "@codemirror/state";
import { autoCloseTags, javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";


export default function Editor({ language }) {
  const editorRef = useRef();
  autoCloseTags: true

  useEffect(() => {
    if (!editorRef.current) return;

    const getLanguageExtension = () => {
      switch (language) {
        case "javascript":
          return javascript();
        case "python":
          return python();
        case "cpp":
          return cpp();
        case "java":
          return java();
        default:
          return javascript();
      }
    };

    const state = EditorState.create({
      doc: "",
      extensions: [basicSetup, getLanguageExtension()],
    });

    const view = new EditorView({
      state,
      parent: editorRef.current,
    });

    return () => {
      view.destroy();
    };
  }, [language]);

  return <div ref={editorRef} className="h-full w-full border border-gray-700 rounded" />;
}
