import React from 'react'
import Banner from '../components/common/Banner';
import Icon from '../components/common/Icon';
import Carousel from '../components/Carousel';
import Divider from '../components/common/Divider';
import VideoPreview from '../components/common/VideoPreview';
import { useGetAllGroupsQuery, useJoinGroupMutation, useLazySearchGroupsQuery } from '../app/services/auth';
import Modal from '../components/common/Modal';
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Groups = () => {
    const {data, isLoading} = useGetAllGroupsQuery();
    const [join] = useJoinGroupMutation();

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
        const result = join(id);
        toast.promise(result, {pending:'Joining group...', success:'Joined group!',error:'Failed to join group.'})
        setModalVisible(false);
    }

    return(
        <div style={{overflowY:'scroll'}}>
        <Banner src='https://t4.ftcdn.net/jpg/04/12/28/57/360_F_412285721_90ZrZh1OmVtBRlZNUanHxebY242e6qo6.jpg'>
            <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <p style={{color:'white',marginBottom:10,fontWeight:'600',fontSize:26}}>Find your people on SkillCenter</p>
                <p style={{color:'white',marginTop:0,marginBottom:10,fontSize:22}}>Find new communities for your interest on SureLearn.</p>
                
                <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:10}}>
                    <input onKeyDown={e => {if(e.code === 'Enter') handleSearch()}} onChange={e => setSearch(e.currentTarget.value)} type='text' style={{minWidth:400,minHeight:20}}/>
                    <Icon name='search' color='white' size={26} style={{marginLeft:10}}/>
                </div>
            </div>
        </Banner>
        <Divider/>
        <div>
        {
        result?.data ? 
        <Carousel title="Search Results" renderData={/*data || []*/[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]} renderItem={item => <VideoPreview onClick={() => handleClick(item)} title={'The React Lovers Group 2020 for a Cause'} thumbnail={item.thumbnail}/>} />
        :
        <Carousel title="Latest Groups" renderData={/*data || []*/[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]} renderItem={item => <VideoPreview onClick={() => handleClick(item)} title={'The React Lovers Group 2020 for a Cause'} thumbnail={item.thumbnail}/>} />
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
            <button onClick={() => handleJoin(modalData.id)} style={{width:'20%',height:45,marginLeft:'80%',backgroundColor:'transparent',border:'none',fontSize:18,cursor:'pointer'}}>JOIN</button>
            </div>

        </Modal>
        }
        </div>
        </div>
    )
}


export default Groups;