import React from 'react';
import styled from 'styled-components';
import Icon from '../common/Icon';

const Carousel = props => {
    const [hover, setHover] = React.useState(false);
    const carouselRef = React.useRef(null);

    const handleClickRightArrow = () => {
        const carousel = carouselRef.current;
        const newLeftPosition = carousel.scrollLeft + carousel.clientWidth;
        const endReached = newLeftPosition > carousel.scrollWidth - carousel.clientWidth * 1.5

        carouselRef.current.scrollTo({top: 0, left:newLeftPosition, behavior:'smooth'})

        if( endReached ) {
            props.onEndReached();
        }

    }

    const handleLeftClickArrow = () => {
            carouselRef.current.scrollTo({top: 0, left:carouselRef.current.scrollLeft - carouselRef.current.clientWidth, behavior:'smooth'})
    }

    return(
        <section onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} style={{position:'relative'}} >
            <CarouselTitle>{props.title}</CarouselTitle>

            <CarouselItemsContainer className='noscroll' ref={carouselRef}>
            {
                props.renderData.map(e => {
                    return(
                        props.renderItem(e)
                    )
                })
            }
            {
                hover &&
                <CarouselControlsContainer>
                    <CarouselControlsButton onClick={handleLeftClickArrow}>
                        <Icon name="arrow-left" color='white' size={32}/>
                    </CarouselControlsButton>

                    <CarouselControlsButton onClick={handleClickRightArrow}>
                        <Icon name="arrow-right" color='white' size={32}/>
                    </CarouselControlsButton>
                </CarouselControlsContainer>
            }
            </CarouselItemsContainer>
        </section>
    )
}

const CarouselItemsContainer = styled.div`
    display:flex;
    flex-direction: row;
    align-items: flex-start;
    overflow-x: scroll;
    gap:5px;
    padding-left: 20px;
`

const CarouselTitle = styled.p`
    font-size: 22px;
    font-weight: 500;
    margin-left:20px;
`

const CarouselControlsContainer = styled.div`
    position:absolute;
    height:10em;
    left:0px;
    width:100%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    pointer-events: none;
`

const CarouselControlsButton = styled.div`
    background-color: rgba(0,0,0,.5);
    height:100%;
    width:3%;
    display:flex;
    justify-content: center;
    align-items: center;
    pointer-events: all;
`


export default Carousel;