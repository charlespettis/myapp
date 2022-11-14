import React from 'react';
import Icon from '../common/Icon';

const Carousel = props => {
    const [hover, setHover] = React.useState(false);

    return(
        <section onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} style={{position:'relative'}}>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <p style={{fontSize:20,fontWeight:300}}>{props.title}</p>
           { hover && <p style={{color:'rgb(24,43,77)',cursor:'pointer'}}>See More</p>}
            </div>
            <div className='noscroll' style={{display:'flex',flexDirection:'row',alignItems:'flex-start',overflowX:'scroll'}}>
            {
                props.renderData.map(e => {
                    return(
                        props.renderItem(e)
                    )
                })
            }
            {
                hover &&
                <div style={{position:'absolute',backgroundColor:'rgba(0,0,0,.5)',height:'10em',width:'3%',left:'97%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Icon name="arrow-right" color='white' size={32}/>
                </div>
            }
            </div>
        </section>
    )
}

export default Carousel;