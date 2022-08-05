import Header from "@editorjs/header"
import List from "@editorjs/list"
import Paragraph from "@editorjs/paragraph"
import Embed from "@editorjs/embed"
import Table from "@editorjs/table"
import Warning from "@editorjs/warning"
import LinkTool from "@editorjs/link"
import Image from '@editorjs/image'
import Raw from "@editorjs/raw"
import Quote from "@editorjs/quote"
import Marker from "@editorjs/marker"
import CheckList from "@editorjs/checklist"
import Delimiter from "@editorjs/delimiter"
import InlineCode from "@editorjs/inline-code"
import SimpleImage from "@editorjs/simple-image"
import Tooltip from 'editorjs-tooltip';
import Hyperlink from 'editorjs-hyperlink';
import Alert from 'editorjs-alert';
import editorjsColumns from '@calumk/editorjs-columns'
import editorjsCodeflask from '@calumk/editorjs-codeflask';
import MermaidTool from 'editorjs-mermaid';
import editorjsNestedChecklist from '@calumk/editorjs-nested-checklist';
import ToggleBlock from 'editorjs-toggle-block';


let column_tools = {
  header: Header,
  alert : Alert,
  paragraph : Paragraph,
  delimiter : Delimiter
}

export const EDITOR_JS_TOOLS = {
  header: {
    class: Header,
    inlineToolbar: ["link"],
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
    config: {
      placeholder: "Type / for commands"
    },
  },
  embed: Embed,
  table: Table,
  warning: Warning,
  code: editorjsCodeflask,
  linkTool: {
    class: LinkTool,
    config: {
      endpoint: '/api/fetch-url', // Your backend endpoint for url data fetching,
    }
  },
  image: {
    class: Image,
    readOnly: true,
  },
  raw: Raw,
  quote: Quote,
  marker: Marker,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
  tooltip: {
    class: Tooltip,
    config: {
      location: 'left',
      highlightColor: '#FFEFD5',
      underline: true,
      backgroundColor: '#154360',
      textColor: '#FDFEFE',
      holder: 'editor-js',
    }
  },
  hyperlink: {
    class: Hyperlink,
    config: {
      shortcut: 'CMD+L',
      target: '_blank',
      rel: 'nofollow',
      availableTargets: ['_blank', '_self'],
      availableRels: ['author', 'noreferrer'],
      validate: false,
    }
  },
  columns : {
    class : editorjsColumns,
    config : {
      tools : column_tools,
    }
  },
  mermaid: MermaidTool,
  nestedchecklist : editorjsNestedChecklist,
  alert: {
    class: Alert,
    inlineToolbar: true,
    shortcut: 'CMD+SHIFT+A',
    config: {
      defaultType: 'primary',
      messagePlaceholder: 'Enter something',
    },
  },
  toggle: {
    class: ToggleBlock,
    inlineToolbar: true,
  },
}
