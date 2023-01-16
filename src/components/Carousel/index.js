import React from 'react';
import { Link } from 'react-router-dom';
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
            setPage(page + 1);

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


    }

    const handleLeftClickArrow = () => {
            carouselRef.current.scrollTo({top: 0, left:carouselRef.current.scrollLeft - carouselRef.current.clientWidth + 28, behavior:'smooth'})
            setPage(page - 1);
    }

    const data = loadedData.length ? [...props.renderData, ...loadedData ] : [...props.renderData];
    
    return(
        <section onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} style={{position:'relative'}} >
            <CarouselTitleRow>
                <CarouselTitle>{props.title}</CarouselTitle>
                {
                    (props.seeMore && hover) &&
                    <CarouselLink to={props.seeMore}>
                        See More
                    </CarouselLink>
                }
            </CarouselTitleRow>

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
                    { page > 1 ?
                    
                    <CarouselControlsButton onClick={handleLeftClickArrow}>
                        <Icon name="arrow-left" color='white' size={32}/>
                    </CarouselControlsButton>
                    :
                    <span/>
                    
                    }
                    

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
    padding-left: 25px;
    gap:5px;
`

const CarouselTitle = styled.p`
    font-size: 22px;
    font-weight: 500;
    text-transform: uppercase;
    color:rgba(0,0,0,.75);
    margin: 0px;
`

const CarouselTitleRow = styled.div`
    padding:0px 25px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 20px;
    justify-content: space-between;
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

const CarouselLink = styled(Link)`
    text-transform: uppercase;
    color:rgba(0,55,200,0.7);
    font-weight: 500;
    cursor: pointer;
`


export default Carousel;