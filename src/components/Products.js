import React, { useState } from 'react';

export default function Products(props) {

    const { products } = props;

    const [cartItems, setcartItems] = useState([]);


    // Add to Cart
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

    // Remove from cart
    const removeFromCartHandler = (item) => {

        const existProduct = cartItems.find(x => x.id === item.id);

        if (existProduct.qty >= 1) {
            setcartItems(cartItems.filter((x) => x.id !== item.id));
        }

    }

    // Display total price 
    const totalPrice = cartItems.reduce((currentPrice, item) => {
        return (item.price * item.qty) + currentPrice;
    }, 0);

    // Coupon state
    const [coupon, setCoupon] = useState({couponCode: 'PROMO30', inputCode: '', disountPrice: '', newPrice:'', isActive: ''});
    
    const handleChange = (e) => {
        // Change state of coupon and check if there is one in state
        setCoupon({...coupon, inputCode: e.target.value});
    }
    const handleSubmit = (e) => {

        e.preventDefault();

        const inputTextTrim = coupon.inputCode.trim();
        if (inputTextTrim.length < 7) {
            return;
        }

        if (inputTextTrim === coupon.couponCode) {
            setCoupon({...coupon, disountPrice: (totalPrice * 0.30).toFixed(0), newPrice: (totalPrice * 0.70).toFixed(0), isActive: true});
        } else {
            setCoupon({...coupon, isActive: false});
        }
        
    }

    return (
        <div className='d-flex flex-wrap align-items-start mt-5'>
            <div className='productList productList--col-2 pr-4'>
                {productItem}
            </div>
            <div className='sidebar sidebar--cart p-4 pt-5 pb-5'>
                <h2 className='mb-4'>Cart</h2>

                {/* Display Carty is empty */}
                {cartItems.length === 0 && <span>Cart is empty</span>}

                {/* Display product info */}
                {cartItems.map(
                    (item, index) => (
                        <div className='container' key={index}>
                            <div className='row align-items-center mb-4 position-relative pl-2 pr-2'>

                                {/* <img src={item.image} alt={item.name}/> */}
                                <div className="col-sm p-0">
                                    <span>{item.name}</span>
                                </div>
                                
                                <div className="qty col-sm p-0">
                                    <button className='btn btn-light btn-sm' onClick={() => decreaseQtyHandler(item)}>-</button>
                                    <span className='text-center d-inline-block'>{item.qty}</span>
                                    <button className='btn btn-light btn-sm' onClick={() => addToCartHandler(item)}>+</button>
                                </div>

                                <div className="col-sm p-0 text-right">
                                    <span>{item.price} EUR</span>
                                </div>

                                <i onClick={() => removeFromCartHandler(item)} className="bi bi-x-circle position-absolute col--remove"></i>
                                
                            </div>
                        </div>
                    )
                )}

                {/* Display cart total if product is added to cart */}
                {cartItems.length > 0 && 
                <div className="cart--total container border-top pt-4 mt-4">
                    <div className="row font-weight-bold pl-2 pr-2">
                        <div className="col-sm p-0">
                            <span>Total</span>
                        </div>
                        <div className="col-sm p-0 text-right">
                            <span>{totalPrice} EUR</span>
                        </div>
                    </div>
                </div>}

                {/* Display coupon */}
                {coupon.isActive === true && cartItems.length > 0 &&
                    <div className="cart--coupon container mt-2 mb-2">
                        <div className="row font-weight-bold pl-2 pr-2">
                            <div className="col-sm p-0">
                                <span>Coupon</span>
                            </div>
                            <div className="col-sm p-0 text-right">
                                <span>{coupon.disountPrice} EUR</span>
                            </div>
                        </div>
                        <div className="row font-weight-bold pl-2 pr-2 mt-2">
                            <div className="col-sm p-0">
                                <span>New total</span>
                            </div>
                            <div className="col-sm p-0 text-right">
                                <span>{coupon.newPrice} EUR</span>
                            </div>
                        </div>
                    </div>
                }
                {coupon.isActive === false && cartItems.length > 0 &&
                    <div className="cart--coupon container mt-2">
                        <div className="row pl-2 pr-2">
                            <span>Incorrect coupon</span>
                        </div>
                    </div>
                }

                {/* Display message if the code is wrong */}
                <div className="coupon mt-4">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input type="text" value={coupon.inputCode} onChange={(e) => handleChange(e)} />
                        <button className='btn btn-primary'>Use coupon</button>
                    </form>
                </div>
                
            </div>
        </div>
        
    )
}
