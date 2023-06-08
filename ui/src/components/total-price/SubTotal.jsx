import "./styles.scss";
import React from 'react'
import useTotal from '../../hooks/useTotal';

const SubTotal = () => {
    const total = useTotal();
    return (
        <div className="subTotal">
            <h4>Subtotal:</h4>
            <h2>${total}</h2>
        </div>
    )
}

export default SubTotal