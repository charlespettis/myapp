import React from 'react';
import Confetti from 'react-confetti';
import Logo from '../components/common/Logo';
import Icon from '../components/common/Icon';
import SubmitButton from '../components/buttons/SubmitButton';

const OrderSuccess = () => {

    return(
        <>
        <main style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'100vh',width:'100vw'}}>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <Logo type='light'/>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center',boxShadow:'0px 0px 4px rgba(0,0,0,.25)',padding:20,minHeight:200}}>
                    <Icon name='check' size={32} color='green' style={{}}/>
                    <h3 style={{fontWeight:'300'}}>Thanks for becoming a member!</h3>
                    
                    <SubmitButton>Return to Login</SubmitButton>
                </div>
            </div>
        </main>
        <Confetti recycle={false} numberOfPieces={400} width={window.innerWidth} height={window.innerHeight}/>
        </>

    )
}

export default OrderSuccess;

