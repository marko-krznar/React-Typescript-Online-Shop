import ProductItem from "../components/ProductItem";
import { ProductContext } from "../local/ProductContext";
import React, { useContext } from "react";

export default function CategoryPage() {
	const [products] = useContext(ProductContext);

	return (
		<main className="page-wrapper category-wrapper d-flex">
			{products.map((product, index) => (
				<ProductItem key={index} product={product} />
			))}
		</main>
	);
}
