import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { COMMAND_PRIORITY_LOW, KEY_ENTER_COMMAND } from 'lexical';
import React from 'react';


function OnKeyDownPlugin(props){
    const [editor] = useLexicalComposerContext();
  
    React.useEffect(() => {

      return editor.registerCommand(
        KEY_ENTER_COMMAND,
        (event) => {
            props.onEnter()
            return false;
        }, COMMAND_PRIORITY_LOW)

    }, [editor]);
  
    return null;
  }
  
  export default OnKeyDownPlugin;