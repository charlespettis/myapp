import React from 'react';
import styled from 'styled-components';
import Icon from '../common/Icon';

const Carousel = props => {
    const [hover, setHover] = React.useState(false);
    const carouselRef = React.useRef(null);
    const [loadedData, setLoadedData] = React.useState([]);
    const [page, setPage] = React.useState(1);

    const handleClickRightArrow = () => {
        const carousel = carouselRef.current;
        const newLeftPosition = carousel.scrollLeft + carousel.clientWidth - 28;
        const endReached = newLeftPosition > carousel.scrollWidth - carousel.clientWidth * 1.5

        carouselRef.current.scrollTo({top: 0, left:newLeftPosition, behavior:'smooth'})

        if( endReached ) {
            const maxedOutVideos = props.renderData.length % 15 !== 0;
            
            if(!maxedOutVideos && props.onEndReached){
                handleEndReached();
            }
        }

    }

    const handleEndReached = async () => {
        const result = await props.onEndReached(page);


        setLoadedData(prevState => {
            return([
                ...prevState,
                ...result.data.videos
            ])
        })

        setPage(page + 1);

    }

    const handleLeftClickArrow = () => {
            carouselRef.current.scrollTo({top: 0, left:carouselRef.current.scrollLeft - carouselRef.current.clientWidth + 28, behavior:'smooth'})
    }

    const data = loadedData.length ? [...props.renderData, ...loadedData ] : [...props.renderData];
    
    return(
        <section onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} style={{position:'relative'}} >
            <CarouselTitle>{props.title}</CarouselTitle>

            <CarouselItemsContainer className='noscroll' ref={carouselRef}>
            {
                data.map(e => {
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
                    

                    <CarouselControlsButton visible={true} onClick={handleClickRightArrow}>
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
    overflow-x: hidden;
    padding-left: 50px;
    gap:5px;
`

const CarouselTitle = styled.p`
    font-size: 22px;
    font-weight: 500;
    margin-left:25px;
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
    background-color: rgba(0,0,0,.3);
    height:100%;
    width:50px;
    display:flex;
    justify-content: center;
    align-items: center;
    pointer-events: all;
`


export default Carousel;