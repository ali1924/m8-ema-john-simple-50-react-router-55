import React from 'react';
import './Cart.css';
const Cart = ({ cart }) => {
    // const cart= props.cart;***Option-1
    // console.log(product);
    // const { cart } = props;***option-2
    // console.log(cart);

    // const { id, img, name, price, quantity, ratings } = cart;
    // const { ratingsCount, seller, shipping, stock } = cart;
    // console.log(cart);
    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart) {
        totalPrice += product.price;
        totalShipping += product.shipping;
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <p>Selected Item:{cart.length}</p>
            <p>Total Price:${totalPrice}</p>
            <p>Total Shipping:${totalShipping}</p>
            <p>Tax:${tax.toFixed(2)}</p>
            <p>Grand Total:${grandTotal.toFixed(2)}</p>
            <p>This is Cart</p>
        </div>
    );
};

export default Cart;