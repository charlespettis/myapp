import React from 'react';
import styled from 'styled-components';
import { useCustomerPortalQuery } from '../app/services/auth';
import InformationBlock from '../components/InformationBlock';

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
                <p style={{alignSelf:'center',textAlign:'center',width:'100%',marginBottom:20}}>...and get full access to our entire catalog on-demand.  You will also be supporting our mission to provide accessible programming education for everyone.</p>
                <InformationBlock type='info'>
                    First two weeks <strong>free</strong>, cancel anytime
                </InformationBlock>
                <div style={{marginTop:20}}>
                    <stripe-pricing-table 
                    pricing-table-id="prctbl_1MZqQ0GesUFmaHPxGECwot9w"
                    publishable-key="pk_live_uUCjZLvs5zuiylUvDs8ORmjO00uSt6vqE0"
                    client-reference-id={data.id}
                    
                    >
                    </stripe-pricing-table>
                </div>
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
    max-width: 50vw;
    align-self:center;
`

export default Billing;
