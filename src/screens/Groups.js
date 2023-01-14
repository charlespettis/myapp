import React from 'react'
import Banner from '../components/common/Banner';
import Carousel from '../components/Carousel';
import VideoPreview from '../components/common/VideoPreview';
import { useGetAllGroupsQuery, useGetSubscribedUserGroupsQuery, useJoinGroupMutation, useLazySearchGroupsQuery } from '../app/services/auth';
import Modal from '../components/common/Modal';
import {toast} from 'react-toastify';

const Groups = () => {
    const data = useGetAllGroupsQuery().data;
    const subscribedGroups = useGetSubscribedUserGroupsQuery()
    const [join] = useJoinGroupMutation();
    console.log(subscribedGroups.data);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalData, setModalData] = React.useState(null);
    const [search, setSearch] = React.useState('');

    const [trigger, result, lastPromiseInfo] = useLazySearchGroupsQuery();

    const handleSearch = () => {
        trigger(search);
    }

    const handleClick = item => {   
        setModalData(item)
        setModalVisible(true)
    }

    const handleJoin = async id => {
        const result = await join(id);
        if(result.data.success){
            await subscribedGroups.refetch();
        }
        setModalVisible(false);
    }
    
    let isInGroup = false;;

    if(modalData?.id && Array.isArray(subscribedGroups.data)){
        const index = subscribedGroups.data.findIndex(e => e.groupId === modalData.id)
        if(index > -1){
            isInGroup = true
        }
    }

    return(
        <div style={{overflowY:'scroll'}}>
        <Banner style={{width:'100%',backgroundColor:'red'}} src='https://t4.ftcdn.net/jpg/04/12/28/57/360_F_412285721_90ZrZh1OmVtBRlZNUanHxebY242e6qo6.jpg'>
            <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <p style={{color:'white',marginBottom:10,fontWeight:'600',fontSize:26}}>Find your people on SkillCenter</p>
                <p style={{color:'white',marginTop:0,marginBottom:10,fontSize:22}}>Find new communities for your interest on SureLearn.</p>
                
                {/* <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:10}}>
                    <input onKeyDown={e => {if(e.code === 'Enter') handleSearch()}} onChange={e => setSearch(e.currentTarget.value)} type='text' style={{minWidth:400,minHeight:20}}/>
                    <Icon name='search' color='white' size={26} style={{marginLeft:10}}/>
                </div> */}
            </div>
        </Banner>
        <div style={{paddingTop:25}}>
        {
        <Carousel title="Latest Featured Groups" renderData={Array.isArray(data) ? data : []} renderItem={item => <VideoPreview title={item.title} onClick={() => handleClick(item)} thumbnail={item.thumbnail}/>} />
        }
        {modalVisible &&
        <Modal
        visible={modalVisible}
        setVisible={setModalVisible}
        >
            <div style={{padding:15,width:750,minHeight:200,backgroundColor:'white',borderRadius:5,boxShadow:'0px 0px 5px 0px rgba(0,0,0,.5)'}}>
                <div style={{float:'left',width:250,height:160,background:modalData.thumbnail,marginRight:10}}/>
                <p style={{marginTop:0,marginBottom:10,fontSize:26}}>{modalData.title}</p>
                <p style={{marginTop:0,lineHeight:2}}>{modalData.description} </p>
            <button onClick={() => handleJoin(modalData.id)} style={{width:'20%',height:45,marginLeft:'80%',backgroundColor:'transparent',border:'none',fontSize:18,cursor:'pointer'}}>{isInGroup ? 'Leave' : 'Join'}</button>
            </div>

        </Modal>
        }
        </div>
        </div>
    )
}


export default Groups;