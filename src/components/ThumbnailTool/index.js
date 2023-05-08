import React from 'react';
import Icon from '../common/Icon';
import VideoPreview from '../common/VideoPreview';
import { icons, backgroundGradients, patterns } from './constansts';
import { MultiSelect, MultiSelectItem } from './MultiSelect';

const ThumbnailTool = props => {
    const [data, setData] = React.useState({
        icon: '',
        background: '',
        pattern: ''
    })
    

    let background = `${data.pattern},${data.background}`;

    const handleChange = item => {
        console.log(item);
        const backgroundShorthand = Object.keys(backgroundGradients).find(key => backgroundGradients[key] === item.background) || data.background;
        const patternShorthand = item.pattern ? Object.keys(patterns).find(key => patterns[key] === item.pattern) || data.pattern : '';
        let background = `${patternShorthand},${backgroundShorthand}`;
        setData(prevState => {
            return({
                ...prevState,
                background: backgroundShorthand,
                pattern: patternShorthand,
                icon: item?.icon ? item.icon : ''
            })
        })
        props.onChange({icon: item.icon, thumbnail: background});   
    }

    const selectIcon = (item) => handleChange({ ...data, icon: item}) 

    const clearIcon = () => handleChange({ ...data, icon: '' })  

    const selectPattern = (item) => {
        handleChange({...data, pattern: item});
    }

    const clearPattern = () => handleChange({...data, pattern: ''})

    const selectBackground = (item) => {
        handleChange({...data, background: item})
    }

    return(
        <div style={{marginTop:20}}>
            <p style={{fontSize:18}}>Thumbnail Generator</p>
            
            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                
                <VideoPreview title={props.title} icon={data.icon} thumbnail={background}  />

                    <p style={{marginTop:20}}>Choose Background</p>
                    
                    <MultiSelect
                    renderData={Object.keys(backgroundGradients)}
                    renderItem={item => {
                        return(
                            <MultiSelectItem
                            selected={item === data.background}
                            value={backgroundGradients[item]}
                            onClick={selectBackground}/>
                        )
                    }}
                    />


                    <p style={{marginTop:20}}>Choose Pattern</p>

                    <MultiSelect
                    allowClear={true}
                    onClear={clearPattern}
                    renderData={Object.keys(patterns)}
                    renderItem={item => {
                        return(
                            <MultiSelectItem
                            selected={item === data.pattern}
                            value={patterns[item]}
                            onClick={selectPattern}/>
                        )
                    }}

                    />
                    <p style={{marginTop:20}}>Choose Icon</p>

                    <MultiSelect
                    allowClear={true}
                    onClear={clearIcon}
                    renderData={Object.values(icons)}
                    renderItem={item => {
                        return(
                            <MultiSelectItem
                            value={item}
                            onClick={selectIcon}>
                             <Icon name={item} size={32} style={{cursor:'pointer',padding:7,borderRadius:5, color: data.icon === item ? 'blue' : 'black'}} />

                            </MultiSelectItem>
                        )

                    }}
                    />                    
            </div>
        </div>
    )
}

export default ThumbnailTool;

