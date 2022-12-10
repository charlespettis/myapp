import React from 'react';
import Icon from '../common/Icon';
import VideoPreview from '../common/VideoPreview';
import { icons, backgroundGradients, patterns } from './constansts';
import { MultiSelect, MultiSelectItem } from './MultiSelect';

const ThumbnailTool = props => {
    const [selectedBackground, setSelectedBackground] = React.useState('');
    const [selectedPattern, setSelectedPattern] = React.useState('');
    const [selectedIcon, setSelectedIcon] = React.useState('');

    const thumbnailString = `${selectedPattern && selectedPattern}${(selectedPattern && selectedBackground) && ','}${selectedBackground && selectedBackground}`

    const selectIcon = (item) => {
        props.onChange({
            thumbnail: thumbnailString,
            icon: item
        });
        setSelectedIcon(item);

    }

    const clearIcon = () => {
        props.onChange({
            thumbnail: thumbnailString,
            icon: null
        })
        setSelectedIcon('');
    }

    const selectPattern = (item) => {
        setSelectedPattern(item);
        props.onChange({
        icon: selectedIcon, 
        thumbnail : `${item && item}${(item && selectedBackground) && ','}${selectedBackground && selectedBackground}`,
        })
    }

    const clearPattern = () => {
        setSelectedPattern('')
        props.onChange({
            thumbnail: `${selectedBackground && selectedBackground}`,
            icon: selectedIcon
        })
    }

    const selectBackground = (item) => {
        setSelectedBackground(item);
        props.onChange({
            thumbnail : `${selectedPattern && selectedPattern}${(selectedPattern && item) && ','}${item && item}`,
            icon: selectedIcon
        })
    }

    return(
        <div style={{marginTop:20}}>
            <p style={{fontSize:18}}>Thumbnail Generator</p>
            
            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                
                <VideoPreview icon={selectedIcon} type='ROADMAP' thumbnail={`${selectedPattern && selectedPattern}${(selectedPattern && selectedBackground) && ','}${selectedBackground && selectedBackground}`}  />

                    <p style={{marginTop:20}}>Choose Background</p>
                    
                    <MultiSelect
                    renderData={Object.values(backgroundGradients)}
                    renderItem={item => {
                        return(
                            <MultiSelectItem
                            selected={item === selectedBackground}
                            value={item}
                            onClick={selectBackground}/>
                        )
                    }}
                    />


                    <p style={{marginTop:20}}>Choose Pattern</p>

                    <MultiSelect
                    allowClear={true}
                    onClear={clearPattern}
                    renderData={Object.values(patterns)}
                    renderItem={item => {
                        return(
                            <MultiSelectItem
                            selected={item === selectedPattern}
                            value={item}
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
                             <Icon name={item} size={32} style={{cursor:'pointer',padding:7,borderRadius:5, color: selectedIcon === item ? 'blue' : 'black'}} />

                            </MultiSelectItem>
                        )

                    }}
                    />                    
            </div>
        </div>
    )
}

export default ThumbnailTool;

