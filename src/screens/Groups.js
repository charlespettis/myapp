import React from 'react'
import Banner from '../components/common/Banner';
import Icon from '../components/common/Icon';
import Carousel from '../components/Carousel';
import Divider from '../components/common/Divider';
import VideoPreview from '../components/common/VideoPreview';

const Groups = () => {

    return(
        <>
        <Banner src='https://t4.ftcdn.net/jpg/04/12/28/57/360_F_412285721_90ZrZh1OmVtBRlZNUanHxebY242e6qo6.jpg'>
            <div style={{width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,.35)',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <p style={{color:'white',marginBottom:10,fontWeight:'600',fontSize:26}}>Fuel your interest on SureLearn</p>
                <p style={{color:'white',marginTop:0,marginBottom:10,fontSize:22}}>Find new communities for your interest on SureLearn.</p>
                
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:10}}>
                    <input type='text' style={{minWidth:400,minHeight:20}}/>
                    <Icon name='search' color='white' size={26} style={{marginLeft:10}}/>
                </div>
            </div>
        </Banner>
        <Divider/>
        
        <Carousel title="Featured Groups" renderData={data} renderItem={item => <VideoPreview title={item.title} />} />

        </>
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

export default Groups;