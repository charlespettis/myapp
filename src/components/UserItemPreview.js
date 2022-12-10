import React from 'react';
import styled from 'styled-components';
import Icon from './common/Icon';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserItemPreview = props => {

    const statusColors = {
        pending: 'darkorange',
        rejected: 'red',
        approved: 'green'
    }

    return(
        <UserItemPreviewContainer>

            <UserItemPreviewRow>
                <Link to={props.link}>
                    <Thumbnail thumbnail={props.thumbnail} />
                </Link>

                <UserItemPreviewTitle>
                    <UserItemPreviewText>{props.title}</UserItemPreviewText>
                    <UserItemPreviewText>{new Date(props.createdAt).toLocaleDateString()}</UserItemPreviewText>
                </UserItemPreviewTitle>
            </UserItemPreviewRow>

            <UserItemPreviewDescription>

                <UserItemPreviewStatusText color={statusColors[props.status]}>
                    {props.status.toUpperCase()}
                </UserItemPreviewStatusText>

                <Link to={`/edit/group/${props.id}`}>
                    <Icon name='gear' size={22} style={{marginRight:10}}/>    
                </Link>
                <Icon name='trash' color='red' size={22} />    

            </UserItemPreviewDescription>

        </UserItemPreviewContainer>
    )
}

UserItemPreview.propTypes = {
    link: PropTypes.string,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    createdAt: PropTypes.string,
    status: PropTypes.string,
    id: PropTypes.string

}


const UserItemPreviewContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    justify-content: space-between;
`

const UserItemPreviewRow = styled.div`
    display:flex;
    flex-direction: row;
`

const UserItemPreviewTitle = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 10px;
`

const UserItemPreviewText = styled.p`
    margin:0px;
`

const UserItemPreviewDescription = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
`

const UserItemPreviewStatusText = styled.p`
    color: ${props => props.color};
    margin-right:10px;

`


const Thumbnail = styled.div`
    width:150px;
    height:75px;
    background: ${props => props.thumbnail};
    border-radius:5px;
`





export default UserItemPreview;