import MonacoEditor from "../../components/Editor/MonacoEditor";
import Header from "../../components/Editor/Header";
import DashboardLayout from "../../examples/LayoutContainers/DashboardLayout";
import Page from "../../components/Common/Page";
import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeRaw from "rehype-raw";
import { Link } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions/category";

function CreatePost() {
  const [code, setCode] = React.useState("<H1>United</H1>");
  const {categories} = useSelector(state => state.category)
  const dispatch = useDispatch();

  const editorDidMount = (editor, monaco) => {
    // editor.focus();
  };

  const onChange = (newValue) => {
    setCode(newValue);
  };

  const options = {
    selectOnLineNumbers: true,
  };

  useEffect(() => {
    dispatch(actions.getListCateAction({start: 0, limit: 20}, () => {}));
  }, [])

  console.log(categories)

  return (
    <DashboardLayout>
      <Header />
      <Page sx={{ flexDirection: "row", justifyContent: "center", display: "flex" }}>
        <div style={{ flex: 1 }}>
          <Link href={'https://agea.github.io/tutorial.md/'} target={'_blank'}>Hướng dẫn sử dụng markdown</Link>
          <MonacoEditor
            language="javascript"
            theme="vs-light"
            value={code}
            options={options}
            onChange={onChange}
            editorDidMount={editorDidMount}
            style={{ flex: 1 }}
          />
        </div>
        {/*<ErrorBoundary key={code}>*/}
        {/*  <MDX scope={scope} components={components} >*/}
        {/*    {code}*/}
        {/*  </MDX>*/}
        {/*</ErrorBoundary>*/}
        <div style={{ flex: 1 }}>
          <div>Preview</div>
          <ReactMarkdown
            style={{ flex: 1 }}
            className="preview-editor"
            remarkPlugins={[remarkGfm, { singleTilde: false }]}
            rehypePlugins={[rehypeRaw]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={dark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {code}
          </ReactMarkdown>
        </div>
      </Page>
    </DashboardLayout>
  );
}

export default CreatePost;