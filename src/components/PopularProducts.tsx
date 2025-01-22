import ProductCard, { Product } from "./ProductCard";

function PopularProducts({ popularProducts }: any) {
	return (
		<section className="container popular-products-container">
			<div className="inner-container-wrapper">
				<h2 className="heading">Popular Products</h2>
				<p className="description">
					Discover our Popular Products, from everyday essentials to
					cutting-edge innovations, these products are crafted to meet
					your needs.
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
