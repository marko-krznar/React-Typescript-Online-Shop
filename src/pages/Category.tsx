import { useSelector } from "react-redux";
import { RootStore } from "../redux/store";

import ProductCard, { Product } from "../components/ProductCard";

function Category() {
	const categoryProducts: null | any = useSelector(
		(state: RootStore) => state.categoryProducts.data
	);

	return (
		<div className="products-list">
			{categoryProducts?.map((product: Product) => (
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
	);
}

export default Category;
