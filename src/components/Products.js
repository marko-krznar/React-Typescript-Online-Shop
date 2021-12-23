import React, { useState } from 'react';

export default function Products(props) {

    const { products } = props;

    const [cartItems, setcartItems] = useState([]);

    const [coupon, setCoupon] = useState({couponCode: 'PROMO30', inputCode: '', disountPrice: '', newPrice:'', isActive: ''});

    // Add to Cart and increase if product is already in cart
    const addToCartHandler = (product) => {
        // Checks if product is in the cart
        const existProduct = cartItems.find(x => x.id === product.id);
        // If exist change only qty
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
        // Remove coupon
        setCoupon({couponCode: 'PROMO30', inputCode: '', disountPrice: '', newPrice:'', isActive: ''});
    }

    // Decrease qty
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
        // Remove coupon
        setCoupon({couponCode: 'PROMO30', inputCode: '', disountPrice: '', newPrice:'', isActive: ''});
    }

    // Display products
    const productItem = products.map((product, index) =>
        <div className='product__item' key={index}>
            <div className='position-relative'>
                <img src={product.image} alt={product.name} />
                <div className='position-absolute block--photo-author'>Photo by <a href={product.imgAuthorLink}>{product.imgAuthor}</a> on <a href={product.imgSource}>Unsplash</a></div>
            </div>
            <div className="info p-4">
                <h2>{product.name}</h2>
                <p>{product.desc}</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='block--price'>
                        <span>{product.price} EUR</span>
                    </div>
                    <div className="block--add-to-cart">
                        <button className='btn btn-primary mb-2' onClick={() => addToCartHandler(product)}>Add to Cart</button>
                    </div>
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

        // Remove coupon
        setCoupon({couponCode: 'PROMO30', inputCode: '', disountPrice: '', newPrice:'', isActive: ''});

    }

    // Display total price 
    const totalPrice = cartItems.reduce((currentPrice, item) => {
        return (item.price * item.qty) + currentPrice;
    }, 0);

    // Change state of coupon and check if there is one in state
    const handleChange = (e) => {
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
            <div className='productList productList--col-4 pr-4'>
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
                            <div className='cart__item row align-items-center mb-4 position-relative pl-2 pr-2'>

                                {/* <img src={item.image} alt={item.name}/> */}
                                <div className="cart__item--name">
                                    <span>{item.name}</span>
                                </div>
                                
                                <div className="cart__item--qty">
                                    <button className='btn btn-light btn-sm' onClick={() => decreaseQtyHandler(item)}>-</button>
                                    <span className='text-center d-inline-block'>{item.qty}</span>
                                    <button className='btn btn-light btn-sm' onClick={() => addToCartHandler(item)}>+</button>
                                </div>

                                <div className="cart__item--price text-right">
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
