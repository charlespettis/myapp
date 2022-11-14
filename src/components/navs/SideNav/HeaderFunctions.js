import React from "react";
import Icon from "../../common/Icon";
import Search from "../../common/Search";
import UserProfilePreview from "../../common/UserProfilePreview";

const HeaderFunctions = () => {
    return(
        <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:25,marginBottom:25,alignSelf:'flex-end'}}>
            <Search/>
            <Icon name='bell' size={28} style={{marginRight:20}} />
            <UserProfilePreview />
        </div>
    )
}

export default HeaderFunctions;