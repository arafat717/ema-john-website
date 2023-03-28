import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let tottal =0
    let tottalShipping=0
    let quantity = 0
    for(const product of cart){
        // if(product.quantity===0){
        //     product.quantity=1
        // }
        // product.quantity = product.quantity || 1;
        tottal = tottal + product.price * product.quantity;
        tottalShipping = tottalShipping + product.shipping
        quantity = quantity + product.quantity;
        
    }
    console.log(quantity)

    const tax = tottal*7/100;
    const grandtottal = tottal + tottalShipping + tax;
    return (
        <div className='cart-products'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Tottal price: ${tottal}</p>
            <p>Total Shipping Charge: ${tottalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandtottal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;