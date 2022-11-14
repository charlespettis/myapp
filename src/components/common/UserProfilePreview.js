import React from 'react';

const UserProfilePreview = props => {
    const [hover, setHover] = React.useState(false);

    return(
        <div onMouseEnter={()=> setHover(true)} onMouseLeave={()=>setHover(false)} style={{position:'relative'}}>
            <img style={{width:45,height:45,objectFit:'cover',borderRadius:100}} src='https://www.howardstern.com/wp-content/uploads/sites/3/2015/05/7675-rs-11-03-08-eric-the-midgetstork_87231.jpg'/>
            {hover &&
            <div style={{display:hover ? 'block' : 'none',padding:15,position:'absolute',left:-500,top:50,borderRadius:5,width:500,height:190,zIndex:99,backgroundColor:'white',boxShadow:'0px 0px 6px 1px rgba(0,0,0,.75)'}}>
                <div style={{display:'flex',flexDirection:'row',alignItems:'flex-end'}}>
                    <img style={{width:75,height:75,objectFit:'cover',borderRadius:100}} src='https://www.howardstern.com/wp-content/uploads/sites/3/2015/05/7675-rs-11-03-08-eric-the-midgetstork_87231.jpg'/>
                    <div style={{marginLeft:10}}>
                    <p style={{fontSize:18,margin:0}}>Charles Pettis</p>
                    <p style={{marginTop:5,marginBottom:0,fontSize:14,marginBottom:5}}>Joined 10/19/22</p>
                    </div>
                </div>
                <p>Hello my honey hello my darling hello my ragtime gal</p>
            </div>
            }
            </div>
    )

}

export default UserProfilePreview;