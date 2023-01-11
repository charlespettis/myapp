import React from 'react';
import styled from 'styled-components';
import { useCustomerPortalQuery } from '../app/services/auth';

const Billing = () => {
    const {data, isLoading, isError} = useCustomerPortalQuery();
    if(data && data.url){
        window.location.href = data.url
    }

    if(isLoading) return <p>jijij</p>

    if(new Object(data).hasOwnProperty('id')){ 
        return(
            <stripe-pricing-table 
            pricing-table-id="prctbl_1MOE0KGesUFmaHPxm0ejz6sn"
            publishable-key="pk_test_N8tqqh6FWRrzNOdEmTF72sIZ006orx6Ay6"
            client-reference-id={data.id}
            >
            </stripe-pricing-table>
        )
    }

    return null;
}

export default Billing;