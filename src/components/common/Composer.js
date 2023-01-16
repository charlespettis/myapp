import React from 'react';
import styled from 'styled-components';
import { useGetSubscribedGroupsCategoriesQuery } from '../../app/services/auth';
import SubmitButton from '../buttons/SubmitButton';
import ThumbnailTool from '../ThumbnailTool';
import Icon from './Icon';

const Composer = props => {
    const [composerShown, toggleComposer] = React.useState(true);
    const {data, isLoading} = useGetSubscribedGroupsCategoriesQuery();
    console.log(data);
    const [value, setValue] = React.useState({
        title:'',
        category:null,
        groupId:null,
        thumbnail:''
    })

    return(
        <ComposerContainer>
        {composerShown &&
            <ComposerSideBarContainer>
                
                <ComposerSideBarTextInput 
                onChange={e => setValue({...value, title: e.currentTarget.value})} 
                placeholder='Enter a title' 
                type='text'
                />
                
                <span style={{visibility:!props.noPlacement ? 'visible' : 'hidden'}}>
                <ComposerSideBarSelect defaultValue={null} onChange={e => setValue({...value, groupId: e.currentTarget.value})} id="browsers2">
                <option value={null} label={'Select Group...'}/>

                    {
                        data?.groups?.map(e => {
                            return(
                                <option value={e.id} label={e.title}/>
                            )
                        })
                    }
                </ComposerSideBarSelect>
                

                <ComposerSideBarSelect defaultValue={null} onChange={e => setValue({...value, category: e.currentTarget.value})} placeholder='Category' list="browsers" name="browser" id="browser">
                <option value={null} label={'Select Category...'}/>

                    {
                        data?.groups?.find(e => e.id === value.groupId)?.categories?.map(e => {
                            return(
                                <option value={e.title} label={e.title}/>
                            )
                        })
                    }
                </ComposerSideBarSelect>
                
                </span>
                    
                <ThumbnailTool
                onChange={e =>{
                    setValue({...value, ...e})}}
                />
            
            </ComposerSideBarContainer>
        }

            <ComposerContentContainer>
                <Icon onClick={()=>toggleComposer(!composerShown)} name={composerShown ? 'arrow-left' : 'arrow-right'} size={32} style={{marginTop:20}}/>
                {props.component}
                <SubmitButton onClick={()=>props.onSubmit(value)}>Publish</SubmitButton>
            </ComposerContentContainer>


        </ComposerContainer>
    )
}

const ComposerSideBarDropdown = styled.input`
    height:30px;
    width:100%;
    margin-top:5px;
    border-left: none;
    border-right: none;
    border-top: none;
    padding: 0px;
`
const ComposerSideBarSelect = styled.select`
    height:30px;
    width:100%;
    margin-top:5px;
    border-left: none;
    border-right: none;
    border-top: none;
    padding: 0px;
`

const ComposerContainer = styled.div`
    display:flex;
    flex-direction: row;
    align-items: flex-start;
    overflow-y: hidden;
    height: 100%;
`

const ComposerSideBarTextInput = styled.input`
    font-size:22px;
    border-top:none;
    border-left: none;
    border-right: none;
    width: 100%;
    height: 30px;
`

const ComposerSideBarContainer = styled.div`
    padding: 15px;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    flex:1;
    height: 100%;
    box-shadow: 0px 0px 5px -2px rgba(0,0,0,.5);
    z-index:2;
`

const ComposerContentContainer = styled.div`
    display:flex;
    flex:3;
    flex-direction: column;
    align-self: center;
    height: 100%;
    width: 100%;
    padding: 30px;
    align-items: flex-start;
    background-color: #f7f7f7;
    justify-content: center;
`

export default Composer;