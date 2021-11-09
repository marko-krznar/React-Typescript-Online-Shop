import React from 'react'

export default function cart(props) {

    const {cartItems} = props;

    return (
        <div>
            <h2>Cart</h2>
            <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
        </div>
    )
}
