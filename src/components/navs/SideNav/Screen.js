import React from "react";
import Icon from "../../common/Icon";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";


const Screen = props => {
    const location = useLocation();
    const selected = location.pathname === props.path;
    const [hover, setHover] = React.useState(false);
    
    if(!props.label) return null;
    
    return(
        <li onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={{opacity: selected || hover ? 1 : .7}}>
            <Link to={props.path} style={{listStyle:'none',cursor:'pointer',color:'white',margin:'1em 3em 1em 0em',display:'flex',alignItems:'center',marginRight:50}}>    
                
                {
                    selected &&
                    <div 
                    style={{
                        width:5,
                        height:35,
                        borderTopRightRadius:15,
                        borderBottomRightRadius:15,
                        backgroundColor:'white'
                    }}
                    />    
                }

                <Icon name={props.icon} size={22} style={{marginLeft:20}}/>
                <p style={{marginLeft:20,fontSize:16,marginRight:20}}>
                    {props.label}
                </p>

            </Link>

        </li>

    )
}

export default Screen;