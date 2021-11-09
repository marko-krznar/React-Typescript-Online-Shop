import React from 'react';

export default function Products(props) {

    const { products } = props;

    const productItem = products.map((product, index) =>
        <div className='product__item' key={index}>
            <div><img src={product.image} alt={product.name} /></div>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button>Add to Cart</button>
        </div>
    );

    return (
        <div className='productList productList--col-4'>
            {productItem}
        </div>
    )
}
