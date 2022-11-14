import React from "react";
import Icon from "./Icon";

const Search = () => {
    const [open, setOpen] = React.useState(false);
    const inputRef = React.useRef();

    const clickSearch = () => {
        setOpen(!open);
        inputRef.current.focus();
    }
    return(
        <>
        {
        open ?
        <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
        
        <Icon name='search' size={28} style={{marginRight:20}}/>
        <input ref={inputRef} autoFocus onBlur={()=>{setOpen(false)}} type={'text'} />
        <Icon name='close' size={28} style={{marginRight:20}}/>

        </div>
        :
        <Icon name='search' onClick={clickSearch} size={28} style={{marginRight:20}}/>
        }
        </>
    )
}

export default Search;