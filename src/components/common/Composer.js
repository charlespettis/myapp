import React from 'react';
import OutlineButton from '../buttons/OutlineButton';
import ThumbnailTool from '../ThumbnailTool';

const Composer = props => {

    const [value, setValue] = React.useState({
        title:'',
        category:null,
        groupId:null,
        thumbnail:''
    })

    return(
        <div style={{display:'flex',flexDirection:"row",justifyContent:'flex-start',overflowY:'hidden'}}>

            <div style={{overflowY:'scroll',display:'flex',flexDirection:'column',flex:1,height:'100%',paddingRight:30}}>
                
                    <input onChange={e => setValue({...value, title: e.currentTarget.value})} placeholder='Enter a title' type='text' style={{fontSize:22,borderTop:'none',borderLeft:'none',borderRight:'none',width:'100%',height:30}}/>
                    {
                    !props.noPlacement &&
                    <>
                    <input onChange={e => setValue({...value, groupId: e.currentTarget.value})} placeholder='Group' style={{height:30,width:'100%',marginTop:5,borderLeft:'none',borderRight:'none',borderTop:'none',padding:0}} list="browsers2" name="browser2" id="browser2"/>
                    <datalist id="browsers2">
                        <option label='Public' value="4a7a23ae-2ef6-41dd-a4a3-743c44e6565c"/>
                    </datalist>
                   

                    <input onChange={e => setValue({...value, category: e.currentTarget.value})} placeholder='Category' style={{height:30,width:'100%',marginTop:5,borderLeft:'none',borderRight:'none',borderTop:'none',padding:0}} list="browsers" name="browser" id="browser"/>
                    <datalist  placeholder='Category' id="browsers">
                        <option value="Web Development"/>
                    </datalist>
                    </>
                    }

            <ThumbnailTool
            onChange={e => setValue({...value, ...e})}
            />
            
            </div>

            <div style={{display:'flex',flex:3,alignSelf:'center',height:'100%',alignItems:'flex-start'}}>
        
            {props.component}
            <OutlineButton onClick={()=>props.onSubmit(value)} style={{width:'20%',marginTop:'auto'}}>Publish</OutlineButton>

            </div>


        </div>
    )
}

export default Composer;