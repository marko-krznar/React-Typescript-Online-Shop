import ProductCard, { Product } from "./ProductCard";

function PopularProducts({ popularProducts }: any) {
	return (
		<section className="container popular-products-container">
			<div className="inner-container-wrapper">
				<h2 className="heading">Popular Products</h2>
				<p className="description">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
					alias beatae aspernatur ex officiis facilis.
				</p>
				<div className="products-list">
					{popularProducts?.map((product: Product) => (
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

export default PopularProducts;
