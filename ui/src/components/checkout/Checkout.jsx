import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import useTotal from '../../hooks/useTotal';
import "./styles.scss";
import { Link } from 'react-router-dom';

const Checkout = () => {
    const [orderPlaced, setOrderPlaced] = useState(false);
    const paymentDetails = useSelector(state=>state.cart.paymentDetails);
    const totalAmount = useTotal();

    useEffect(()=>{
        setTimeout(() => {
            setOrderPlaced(true);
        }, 2000);
    },[])

    return (
        <div className='checkout'>
            {
                orderPlaced?
                <div className='checkout__order-placed'>
                    <h1>Thank you {paymentDetails.name}!</h1>
                    <p>Your order has been placed successfully.</p>
                    <div class="checkout__order-placed__link"><Link to="/shopping">Continue Shopping</Link></div>
                </div>:
                <div className='checkout__processing'>
                    <h2>Your payment of ${totalAmount} is being processed...</h2>
                </div>
            }
           
        </div>
    )
}

export default Checkout