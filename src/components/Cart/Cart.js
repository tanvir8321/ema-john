import React, { useState } from 'react';

const Cart = (props) => {
    let cprice = 0;
    let shippingPrice = 0;
    let tax = 0;
    for(let i=0;i<props.cart.length;i++){
        cprice = cprice + props.cart[i].price
        shippingPrice = shippingPrice + props.cart[i].shipping
    }
    tax = (cprice + shippingPrice) * 0.10;
    const fractionFix = number => number.toFixed(2);
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Items Ordered: {props.cart.length}</p>
            <table>
                <tbody>
                    <tr>
                        <td>Items:</td>
                        <td>${fractionFix(cprice)}</td>
                    </tr>
                    <tr>
                        <td>Shipping and Handling:</td>
                        <td>${fractionFix(shippingPrice)}</td>
                    </tr>
                    <tr>
                        <td>Total before tax:</td>
                        <td>${fractionFix(shippingPrice+cprice)}</td>
                    </tr>
                    <tr>
                        <td>Estimated Tax:</td>
                        <td>${fractionFix(tax)}</td>
                    </tr>
                    <tr>
                        <td>Order Total:</td>
                        <td>${fractionFix(cprice+tax)}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default Cart;