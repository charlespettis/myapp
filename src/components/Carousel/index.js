import React from 'react';
import Icon from '../common/Icon';

const Carousel = props => {
    const [hover, setHover] = React.useState(false);
    const carouselRef = React.useRef(null);

    const handleClickRightArrow = () => {
        const carousel = carouselRef.current;
        const newLeftPosition = carousel.scrollLeft + carousel.clientWidth;
        const endReached = newLeftPosition > carousel.scrollWidth - carousel.clientWidth * 2

        carouselRef.current.scrollTo({top: 0, left:newLeftPosition, behavior:'smooth'})

        if( endReached ) {
            props.beforeEndReached();
        }

    }

    const handleLeftClickArrow = () => {
            carouselRef.current.scrollTo({top: 0, left:carouselRef.current.scrollLeft - carouselRef.current.clientWidth, behavior:'smooth'})
    }

    return(
        <section onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} style={{position:'relative'}}>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <p style={{fontSize:20,fontWeight:300}}>{props.title}</p>
           { hover && <p style={{color:'rgb(24,43,77)',cursor:'pointer'}}>See More</p>}
            </div>
            <div className='noscroll' ref={carouselRef} style={{display:'flex',flexDirection:'row',alignItems:'flex-start',overflowX:'scroll',gap:20}}>
            {
                props.renderData.map(e => {
                    return(
                        props.renderItem(e)
                    )
                })
            }
            {
                hover &&
                <div onClick={handleLeftClickArrow} style={{position:'absolute',backgroundColor:'rgba(0,0,0,.5)',height:'10em',width:'3%',left:'0%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Icon name="arrow-left" color='white' size={32}/>
                </div>
            }

            {
                hover &&
                <div onClick={handleClickRightArrow} style={{position:'absolute',backgroundColor:'rgba(0,0,0,.5)',height:'10em',width:'3%',left:'97%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Icon name="arrow-right" color='white' size={32}/>
                </div>
            }
            </div>
        </section>
    )
}

export default Carousel;