import { useSelector } from "react-redux";
import { categoryProductsSelector } from "../redux/store";

import ProductCard, { Product } from "../components/ProductCard";

function Category() {
	const categoryProducts = useSelector(categoryProductsSelector);

	return (
		<div className="container">
			<div className="inner-container-wrapper products-list">
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
		</div>
	);
}

export default Category;
