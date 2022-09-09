import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import "./style.scss";

export const ProductPage = () => {
	const location = useLocation();

	return (
		<div className="page product">
			<div className="breadcrumb">
				<Link to={"/products"}>Back to products</Link>
			</div>
			<div className="block--img">
				<img src={location?.state?.image} alt="Awesome Plant" />
			</div>
			<div className="block--info">
				<h2>{location?.state?.name}</h2>
				<p>{location?.state?.desc}</p>
				<p>Price: {location?.state?.price} €</p>
				<button className="btn btn--light">Add to cart</button>
			</div>
		</div>
	);
};
