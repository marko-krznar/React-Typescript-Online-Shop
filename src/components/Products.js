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

    const productItem = products.map((product, index) =>
        <div className='product__item' key={index}>
            <div><img src={product.image} alt={product.name} /></div>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <button onClick={() => addToCartHandler(product)}>Add to Cart</button>
        </div>
    );

    return (
        <div>
            <div className='productList productList--col-4'>
                {productItem}
            </div>
            <div>
                <h2>Cart</h2>
                {/* Ako nema ništa u cart-u ispiši da je empty */}
                <p>{cartItems.length === 0 && <span>Cart is empty</span>}</p>
                {cartItems.map(
                    (item, index) => (
                        <div key={index}>
                            {/* <img src={item.image} alt={item.name}/> */}
                            <span>{item.name}</span>
                            <span>{item.price} kn</span>
                            <button onClick={() => addToCartHandler(item)}>+</button>
                            <span>{item.qty}</span>
                            <button onClick={() => decreaseQtyHandler(item)}>-</button>
                        </div>
                    )
                )}
            </div>
        </div>
        
    )
}
