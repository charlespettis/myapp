import React from 'react';
import { useCreateCheckoutSessionMutation } from '../app/services/auth';

const Billing = () => {
    const [create, {isLoading}] = useCreateCheckoutSessionMutation();

    const handleSubmit = async e => {
        e.preventDefault();

        try{
            const result = await create({priceId: 'price_1MGZRRGesUFmaHPx2lqagPCy'});
            if(result.data.success){
                window.location.href = result.data.url
            }
        }catch(err){
            console.log(err);
        }
    }

    return(
        <form onSubmit={handleSubmit} method="POST">
            <button type="submit">Checkout</button>
        </form>
    )
}

export default Billing;