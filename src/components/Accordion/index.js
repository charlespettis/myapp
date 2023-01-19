import React from 'react';
import styled from 'styled-components';
import Icon from '../common/Icon';
import PropTypes from 'prop-types';


const Accordion = props => {
    const [isOpen, setIsOpen] = React.useState(false);

    return(
        <AccordionContainer>
            <AccordionTitleContainer onClick={()=>setIsOpen(!isOpen)} >

                    <AccordionTitle>
                        {props.title}
                    </AccordionTitle>

                    <Icon name={isOpen ? 'arrow-up' : 'arrow-down'} size={22} />

            </AccordionTitleContainer>
            

            {
                isOpen && 
                <AccordionItemsContainer>
                {
                    props.headerComponent
                }
                {
                    props.renderData.length > 0 && props.renderData.map( e => {
                        return props.renderItem(e);
                    })
                }

                </AccordionItemsContainer>
            }
            
        </AccordionContainer>
    )
}

const AccordionContainer = styled.div`
    padding:0px;
`

const AccordionTitleContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    cursor:pointer;
`

const AccordionTitle = styled.p`
`

const AccordionItemsContainer = styled.div`
    max-height: 400px;
    overflow-y:scroll;
`

Accordion.propTypes = {
    headerComponent: PropTypes.element,
    renderData: PropTypes.array,
    renderItem: PropTypes.arrayOf(PropTypes.object),
}


export default Accordion;