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
        <div style={{display:'flex',flexDirection:"row",justifyContent:'flex-start',overflowY:'hidden',height:'100%'}}>

            <div style={{padding:15,overflowX:'hidden',display:'flex',flexDirection:'column',flex:1,height:'100%',boxShadow:'0px 0px 5px -2px rgba(0,0,0,0.5)'}}>
                
                    <input onChange={e => setValue({...value, title: e.currentTarget.value})} placeholder='Enter a title' type='text' style={{fontSize:22,borderTop:'none',borderLeft:'none',borderRight:'none',width:'100%',height:30}}/>
                    
                    <span style={{visibility:!props.noPlacement ? 'visible' : 'hidden'}}>
                    <input onChange={e => setValue({...value, groupId: e.currentTarget.value})} placeholder='Group' style={{height:30,width:'100%',marginTop:5,borderLeft:'none',borderRight:'none',borderTop:'none',padding:0}} list="browsers2" name="browser2" id="browser2"/>
                    <datalist id="browsers2">
                        <option label='Public' value="4a7a23ae-2ef6-41dd-a4a3-743c44e6565c"/>
                    </datalist>
                   

                    <input onChange={e => setValue({...value, category: e.currentTarget.value})} placeholder='Category' style={{height:30,width:'100%',marginTop:5,borderLeft:'none',borderRight:'none',borderTop:'none',padding:0}} list="browsers" name="browser" id="browser"/>
                    <datalist  placeholder='Category' id="browsers">
                        <option value="Web Development"/>
                    </datalist>
                    </span>
                    

            <ThumbnailTool
            onChange={e => setValue({...value, ...e})}
            />
            
            </div>

            <div style={{display:'flex',flex:3,flexDirection:'column',alignSelf:'center',height:'100%',width:'100%',padding:30,alignItems:'flex-start'}}>
                    
            {props.component}
            <OutlineButton onClick={()=>props.onSubmit(value)} style={{width:'20%',marginTop:'auto',alignSelf:'flex-end'}}>Publish</OutlineButton>

            </div>


        </div>
    )
}

export default Composer;