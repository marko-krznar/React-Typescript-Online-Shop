import { useDispatch, useSelector } from "react-redux";
import { activeProductSelector } from "../redux/store";
import { Tag, Image, Button } from "antd";

import { renderPrice } from "../utils/helpers";
import { addProduct } from "../redux/shop/cart";
import { NavLink } from "react-router";

function Product() {
	const dispatch = useDispatch();
	const product: any = useSelector(activeProductSelector);

	return (
		<>
			{product && (
				<div className="product-detail-wrapper">
					<div className="product-detail-gallery-wrapper">
						<Image width={200} src={product.image} />
					</div>
					<div className="product-detail-content-wrapper">
						<Tag>
							<NavLink to={`/category/${product.category}`}>
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
		</>
	);
}

export default Product;
