import { Card, Flex, Button } from "antd";
import Meta from "antd/es/card/Meta";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { AppDispatch } from "../redux/store";

import { addProduct } from "../redux/shop/cart";
import { fetchProduct } from "../redux/shop/active-product";

import { renderPrice } from "../utils/helpers";

export interface Product {
	id: number;
	title: string;
	image: string;
	description: string;
	price: number;
}

function ProductCard({ id, title, image, description, price }: Product) {
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();

	const productForCart = {
		id: id,
		title: title,
		image: image,
		description: description,
		price: price,
		quantity: 1,
	};

	return (
		<Card
			key={id}
			cover={<img alt={title} src={image} />}
			className="products-card"
		>
			<Meta title={title} description={description} />
			<div className="products-card-footer">
				<span className="price">{renderPrice(price)}</span>
				<Flex gap="small">
					<Button
						type="primary"
						onClick={() => dispatch(addProduct(productForCart))}
					>
						Add To Cart
					</Button>
					<Button
						onClick={() => {
							dispatch(fetchProduct(id));
							navigate(`/products/${id}`);
						}}
					>
						Details
					</Button>
				</Flex>
			</div>
		</Card>
	);
}

export default ProductCard;
