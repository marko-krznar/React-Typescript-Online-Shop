import React from "react";

export default function ProductItem( {product} ) {

    return (
        <div className="product__item">
            <div className="position-relative">
                <img src={product.image} alt={product.name} />
                <div className="position-absolute block--photo-author">
                    Photo by{" "}
                    <a href={product.imgAuthorLink}>{product.imgAuthor}</a> on{" "}
                    <a href={product.imgSource}>Unsplash</a>
                </div>
            </div>
            <div className="info p-4">
                <h2>{product.name}</h2>
                <p>{product.desc}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="block--price">
                        <span>{product.price} EUR</span>
                    </div>
                    <div className="block--add-to-cart">
                        <button className="btn btn-primary mb-2">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
