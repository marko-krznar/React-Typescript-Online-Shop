import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
	AppDispatch,
	categoriesSelector,
	popularProductsSelector,
} from "../redux/store";
import { fetchCategories } from "../redux/shop/categories";
import { fetchPopularProducts } from "../redux/shop/popular-products";
import { fetchCategoryProducts } from "../redux/shop/category-products";

import PopularProducts from "../components/PopularProducts";
import NewProducts from "../components/NewProducts";

function Home() {
	const dispatch = useDispatch<AppDispatch>();
	const categories = useSelector(categoriesSelector);
	const popularProducts = useSelector(popularProductsSelector);

	const handleLinkClick = (category: string) => {
		dispatch(fetchCategoryProducts(category));
	};

	useEffect(() => {
		dispatch(fetchCategories());
		dispatch(fetchPopularProducts());
	}, []);

	return (
		<>
			<div className="container">
				<div className="inner-container-wrapper intro-section">
					{categories?.map((category: any) => (
						<Link
							to={`category/${category}`}
							key={category}
							className="category-card"
							onClick={() => handleLinkClick(category)}
						>
							{/* <LaptopOutlined style={{ fontSize: "48px" }} />
						<CrownOutlined style={{ fontSize: "48px" }} />
						<ManOutlined style={{ fontSize: "48px" }} />
						<WomanOutlined style={{ fontSize: "48px" }} /> */}
							<span>{category}</span>
							<span>Shop Now</span>
						</Link>
					))}
				</div>
			</div>
			<PopularProducts popularProducts={popularProducts} />
			<NewProducts />
		</>
	);
}

export default Home;
