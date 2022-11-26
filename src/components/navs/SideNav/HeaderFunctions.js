import React from "react";
import Search from "../../common/Search";

const HeaderFunctions = () => {
    return(
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:25,alignSelf:'flex-end'}}>
            <Search/>
        </div>
    )
}

export default HeaderFunctions;