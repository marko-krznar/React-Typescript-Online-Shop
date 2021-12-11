import React, { useState } from 'react';

export default function Products(props) {

    const { products } = props;

    const [cartItems, setcartItems] = useState([]);

    const addToCartHandler = (product) => {
        // Provjera dal proizvod postoji u state-u cartItems, provjera se radi prema id-u proizvoda
        const existProduct = cartItems.find(x => x.id === product.id);
        // Ako postoji samo se mijenja količina dok ostalo ostaje isto
        if (existProduct) {
            setcartItems(
                cartItems.map((x) => 
                    x.id === product.id ? {...existProduct, qty: existProduct.qty + 1 } : x
                )
            );
        } else {
            // Dodavanje proizvoda u cart
            setcartItems([...cartItems, {...product, qty: 1}]);
        }
    }

    // Mogućnost za smanjivanje proizvoda u cart-u
    const decreaseQtyHandler = (item) => {
        const existProduct = cartItems.find(x => x.id === item.id);
        if (existProduct) { 
            setcartItems(
                cartItems.map((x) => 
                    x.id === item.id ? {...existProduct, qty: existProduct.qty - 1 } : x
                )
            );
        }
    // Ako postojeći proizvod ima količinu 1 i ako korisnik klikne na gumb, funkcija mora maknuti proizvod iz state-a cart-a
        if (existProduct.qty === 1) {
            setcartItems(cartItems.filter((x) => x.id !== item.id));
        }
    }

    // Display products
    const productItem = products.map((product, index) =>
        <div className='product__item' key={index}>
            <div><img src={product.image} alt={product.name} /></div>
            <div className="info p-3">
                <h2>{product.name}</h2>
                <p>{product.price} EUR</p>
                <div className="text-center">
                    <button className='btn btn-primary mb-2' onClick={() => addToCartHandler(product)}>Add to Cart</button>
                </div>
            </div>
        </div>
    );

    return (
        <div className='d-flex flex-wrap align-items-start mt-5'>
            <div className='productList productList--col-2 pr-4'>
                {productItem}
            </div>
            <div className='sidebar p-3'>
                <h2>Cart</h2>
                {/* Ako nema ništa u cart-u ispiši da je empty */}
                <p>{cartItems.length === 0 && <span>Cart is empty</span>}</p>
                {cartItems.map(
                    (item, index) => (
                        <div className='d-flex align-items-center
                        ' key={index}>
                            {/* <img src={item.image} alt={item.name}/> */}
                            <span>{item.name}</span>
                            <button className='btn btn-light' onClick={() => decreaseQtyHandler(item)}>-</button>
                            <span>{item.qty}</span>
                            <button className='btn btn-light' onClick={() => addToCartHandler(item)}>+</button>
                            <span>{item.price} EUR</span>
                        </div>
                    )
                )}
            </div>
        </div>
        
    )
}
