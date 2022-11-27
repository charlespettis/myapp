import React from 'react';
import styled from 'styled-components';
import Icon from '../common/Icon';

const Accordion = props => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [hover, setHover] = React.useState(false);
    
    //TODO:
    //rewrite renderdata prop to accept array of objects for multiple toggleable drawers and render them all at once rather than needing to write <Accordion /> more than once
    //example [{title:'Hello', data: [{x:1},{x:2},{x:3}]}] creates accordion with one openable block labeled Hello that has data for 3 nested list items that are rendered from component in props.renderItem with x as the item props

    return(
        <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={{backgroundColor:isOpen || hover ? 'transparent' : 'transparent', padding:10}}>
            <Div onClick={()=>setIsOpen(!isOpen)} >
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    {props.icon}

                    <P>
                        {props.title}
                    </P>
                </div>

                {
                    isOpen ? 
                    <Icon name='arrow-up' size={22} />
                    :
                    <Icon name='arrow-down' size={22} />
                }

            </Div>
            

            {
            isOpen && 
            <div style={{maxHeight:400,overflowY:'scroll'}}>
            {
                props.headerComponent
            }
            {
                props.renderData.map( e => {
                    return props.renderItem(e);
                })
            }

            </div>
            }
            
        </div>
    )
}


const P = styled.p`
    font-size:18px;
`

const Div = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    cursor:pointer;
`

export default Accordion;