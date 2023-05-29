import ExampleTheme from "./themes/ExampleTheme";
import {$getRoot, $getSelection} from 'lexical';
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import TreeViewPlugin from "./plugins/TreeViewPlugin";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";
import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin";
import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import AutoLinkPlugin from "./plugins/AutoLinkPlugin";
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';

import './editorStyles.css'
import OnKeyDownPlugin from "./plugins/OnKeyDownPlugin";
import React, { useEffect } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

function Placeholder(props) {
  return <div className="editor-placeholder">{props.placeholder ? props.placeholder : 'Begin writing your article...'}</div>;
}



export default function Editor(props) {

  function onChange(editorState) {
    if(props.onChange) props.onChange(JSON.stringify(editorState))
  }

  const editorConfig = {
    // The editor theme
    theme: ExampleTheme,
    // Handling of errors during update
    onError(error) {
      throw error;
    },
    // Any custom nodes go here
    nodes: [
      HeadingNode,
      ListNode,
      ListItemNode,
      QuoteNode,
      CodeNode,
      CodeHighlightNode,
      TableNode,
      TableCellNode,
      TableRowNode,
      AutoLinkNode,
      LinkNode
    ],
  };

  if(props.text){
    editorConfig['editorState'] = props.text
    editorConfig['editable'] = false
  }
  
  return (
    <LexicalComposer  initialConfig={editorConfig}>
      <div style={{marginTop:10,paddingTop:0,width:'100%',alignSelf:'center',justifySelf:'center', ...props.style}} className="editor-container">
        {!props.text && <ToolbarPlugin minimized={props.minimizedToolbar} />}
        <div className="editor-inner" style={{overflowY:'scroll',...props.inputStyle}}>
          <OnChangePlugin onChange={onChange} />
          <RichTextPlugin
            
            contentEditable={<ContentEditable style={props.contentStyle} className="editor-input" />}
            placeholder={<Placeholder placeholder={props.placeholder} />}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
          <CodeHighlightPlugin />
          <ListPlugin />
          <LinkPlugin />
          <AutoLinkPlugin />
          <ListMaxIndentLevelPlugin maxDepth={7} />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
          {props.onEnter &&
          <OnKeyDownPlugin
          onEnter={props.onEnter}
          />
          }
          <HandleUpdatesPlugin text={props.text} />
          
        </div>
      </div>
    </LexicalComposer>
  );
}

const HandleUpdatesPlugin = props => {
  const [editor] = useLexicalComposerContext();
  useEffect(()=>{
    if(props.text){
      const editorState = editor.parseEditorState(props.text);
      editor.setEditorState(editorState);  
    }
  },[props.text])

  return null;
}