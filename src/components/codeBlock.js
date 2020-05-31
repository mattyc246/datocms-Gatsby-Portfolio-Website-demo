import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import codeTheme from "react-syntax-highlighter/dist/esm/styles/prism/xonokai";

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={codeTheme}>
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
