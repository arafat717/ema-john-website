import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart)
    let tottal =0
    let tottalShipping=0
    for(const product of cart){
        tottal = tottal + product.price;
        tottalShipping = tottalShipping + product.shipping
    }

    const tax = tottal*7/100;
    const grandtottal = tottal + tottalShipping + tax;
    return (
        <div className='cart-products'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Tottal price: ${tottal}</p>
            <p>Total Shipping Charge: ${tottalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandtottal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;