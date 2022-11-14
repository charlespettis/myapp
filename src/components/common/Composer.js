import React from 'react';
import OutlineButton from '../buttons/OutlineButton';
import ThumbnailTool from '../ThumbnailTool';

const Composer = props => {

    return(
        <div style={{display:'flex',flexDirection:"column"}}>

            <div style={{display:'flex',flexDirection:'row',alignItems:'center',marginBottom:50,marginTop:10}}>
                
                <span style={{display:'flex',flexDirection:'row',alignItems:'flex-end'}}>
                    <input placeholder='Enter a title' type='text' style={{fontSize:22,borderTop:'none',borderLeft:'none',borderRight:'none',width:400,height:30}}/>
                    
                    <input placeholder='Group' style={{height:30,width:200,borderLeft:'none',borderRight:'none',borderTop:'none',padding:0,marginLeft:20}} list="browsers2" name="browser2" id="browser2"/>
                    <datalist id="browsers2">
                        <option value="Edge"/>
                        <option value="Firefox"/>
                        <option value="Chrome"/>
                        <option value="Opera"/>
                        <option value="Safari"/>
                    </datalist>


                    <input placeholder='Category' style={{height:30,width:200,borderLeft:'none',borderRight:'none',borderTop:'none',padding:0,marginLeft:20}} list="browsers" name="browser" id="browser"/>
                    <datalist  placeholder='Category' id="browsers">
                        <option value="Edge"/>
                        <option value="Firefox"/>
                        <option value="Chrome"/>
                        <option value="Opera"/>
                        <option value="Safari"/>
                    </datalist>

                    <input placeholder='Sub-Category' style={{height:30,width:200,borderLeft:'none',borderRight:'none',borderTop:'none',padding:0,marginLeft:20}} list="browsers2" name="browser2" id="browser2"/>
                    <datalist id="browsers2">
                        <option value="Edge"/>
                        <option value="Firefox"/>
                        <option value="Chrome"/>
                        <option value="Opera"/>
                        <option value="Safari"/>
                    </datalist>


                <OutlineButton style={{marginLeft:20}}>Publish</OutlineButton>
                </span>

            </div>

            {props.component}

            <ThumbnailTool/>

        </div>
    )
}

export default Composer;