import React from 'react';
import Carousel from '../components/Carousel';
import Divider from '../components/common/Divider';
import VideoPreview from '../components/common/VideoPreview';

const Videos = () => {
    return(
        <div style={{display:'flex',flexDirection:'column'}}>
            <Carousel title="JavaScript" renderData={data} renderItem={item => <VideoPreview title={item.title} />} />
            <Divider/>
            <Carousel title="React" renderData={data} renderItem={item => <VideoPreview title={item.title} />} />
            <Divider/>
            <Carousel title="Vue" renderData={data} renderItem={item => <VideoPreview title={item.title} />} />
            <Divider/>
            <Carousel title="Angular" renderData={data} renderItem={item => <VideoPreview title={item.title} />} />

        </div>
    )
}


const data = [
    {
        title:'1top 10 ways to smear honey on your face doo doo doo do odo do oo... asdoasdj asod asdj oas...'
    },
    {
        title:'10 different ways to get paid'

    },
    {
        title:'10 different ways to get paid'

    },
    {
        title:'10 different ways to get paid'
    },
    {
        title:'10 different ways to get paid'
    },
    {
        title:'10 different ways to get paid'
    },
]

export default Videos;