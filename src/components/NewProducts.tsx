import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, newProductsSelector } from "../redux/store";
import { fetchNewProducts } from "../redux/shop/new-products";

import ProductCard, { Product } from "./ProductCard";
import { Flex } from "antd";

function NewProducts() {
	const newProducts = useSelector(newProductsSelector);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchNewProducts());
	}, [dispatch]);

	return (
		<section className="container new-products-container">
			<div className="inner-container-wrapper">
				<Flex vertical gap="small" align="center">
					<h2 className="heading">New Products</h2>
					<p className="description">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Ea alias beatae aspernatur ex officiis facilis.
					</p>
				</Flex>
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
