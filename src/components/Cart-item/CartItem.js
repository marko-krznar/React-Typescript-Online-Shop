import React from "react";

export default function CartItem({ cartItem }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>All</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{cartItem.name}</td>
            <td>{cartItem.price}</td>
            <td>{cartItem.name}</td>
            <td>{cartItem.name}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
