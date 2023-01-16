import React from 'react';
import styled from 'styled-components';
import { useCustomerPortalQuery } from '../app/services/auth';

const Billing = () => {
    const {data, isLoading, isError} = useCustomerPortalQuery();

    if(new Object(data).hasOwnProperty('url')){
        window.location.href = data.url
        return <StripeLoading/>;
    }

    if(new Object(data).hasOwnProperty('id')){ 
        return(
            <BillingContainer>
                <h1 style={{alignSelf:'center',textAlign:'center',width:'100%'}}>JOIN THE CLUB...</h1>
                <p style={{alignSelf:'center',textAlign:'center',width:'100%',marginBottom:50}}>...and get full access to our entire catalog on-demand.  You will also be supporting our mission to provide accessible programming education to everyone.</p>
                <stripe-pricing-table 
                pricing-table-id="prctbl_1MOE0KGesUFmaHPxm0ejz6sn"
                publishable-key="pk_test_N8tqqh6FWRrzNOdEmTF72sIZ006orx6Ay6"
                client-reference-id={data.id}
                
                >
                </stripe-pricing-table>
            </BillingContainer>
        )
    }

}

const StripeLoading = () => {
    <div style={{height:'100%',width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <img src={require('../assets/images/Spin-1s-200px.gif')} width={50} height={50}/>
        <img src={require('../assets/images/Stripe-Logo-2009.png')} width={200} height={'auto'}/>

    </div>
}

const BillingContainer = styled.div`
    margin-top: 10vh;
`

export default Billing;