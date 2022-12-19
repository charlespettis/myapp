import React from 'react';
import { useLocation } from 'react-router-dom';
import { useOrderSuccessQuery } from '../app/services/auth';

const OrderSuccess = () => {
    const sessionId = new URLSearchParams(useLocation().search).get("session_id");
    const {data, isLoading}= useOrderSuccessQuery({session_id: sessionId});

    return(
      <p>{sessionId}</p>
    )
}

export default OrderSuccess;

