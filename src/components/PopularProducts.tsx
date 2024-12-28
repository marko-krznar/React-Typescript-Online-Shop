import ProductCard, { Product } from "./ProductCard";

function PopularProducts({ popularProducts }: any) {
	return (
		<section className="popular-products">
			<h2 className="heading">Popular Products</h2>
			<p className="description">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
				alias beatae aspernatur ex officiis facilis.
			</p>
			<div className="products-list">
				{popularProducts?.map((product: Product) => (
					<ProductCard
						id={product.id}
						title={product.title}
						image={product.image}
						description={product.description}
						price={product.price}
					/>
				))}
			</div>
		</section>
	);
}

export default PopularProducts;
