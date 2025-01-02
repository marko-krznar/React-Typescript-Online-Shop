import { NavLink } from "react-router";
import { Tag, Image, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { activeProductSelector, AppDispatch } from "../redux/store";
import { addProduct } from "../redux/shop/cart";

import { renderPrice } from "../utils/helpers";
import { fetchCategoryProducts } from "../redux/shop/category-products";

function Product() {
	const dispatch = useDispatch<AppDispatch>();
	const product: any = useSelector(activeProductSelector);

	return (
		<div className="container">
			{product && (
				<div className="inner-container-wrapper product-detail-wrapper">
					<div className="product-detail-gallery-wrapper">
						<Image width={200} src={product.image} />
					</div>
					<div className="product-detail-content-wrapper">
						<Tag>
							<NavLink
								to={`/category/${product.category}`}
								onClick={() =>
									dispatch(
										fetchCategoryProducts(product.category)
									)
								}
							>
								{product.category}
							</NavLink>
						</Tag>
						<h2 className="heading">{product.title}</h2>
						<span className="price">
							{renderPrice(product.price)}
						</span>
						<span>Description</span>
						<p className="description">{product.description}</p>
						<Button
							type="primary"
							onClick={() => dispatch(addProduct(product))}
						>
							Add To Cart
						</Button>
					</div>
				</div>
			)}
		</div>
	);
}

export default Product;
