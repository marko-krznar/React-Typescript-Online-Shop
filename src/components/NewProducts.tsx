import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, newProductsSelector } from "../redux/store";
import { fetchNewProducts } from "../redux/shop/new-products";

import ProductCard, { Product } from "./ProductCard";

function NewProducts() {
	const newProducts = useSelector(newProductsSelector);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchNewProducts());
	}, [dispatch]);

	return (
		<section className="container new-products-container">
			<div className="inner-container-wrapper">
				<h2 className="heading">New Products</h2>
				<p className="description">
					Explore our New Products, from groundbreaking technology to
					stylish essentials, our new arrivals are curated to impress.
				</p>
				<div className="products-list">
					{newProducts?.map((product: Product) => (
						<ProductCard
							key={product.id}
							id={product.id}
							title={product.title}
							image={product.image}
							description={product.description}
							price={product.price}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default NewProducts;
