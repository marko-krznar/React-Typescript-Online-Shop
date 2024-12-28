import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { AppDispatch, RootStore } from "../redux/store";
import { fetchCategories } from "../redux/shop/categories";
import { fetchPopularProducts } from "../redux/shop/popular-products";
import { fetchCategoryProducts } from "../redux/shop/category-products";

import PopularProducts from "../components/PopularProducts";

function Home() {
	const dispatch = useDispatch<AppDispatch>();
	const categories: null | any = useSelector(
		(state: RootStore) => state.categories.data
	);
	const popularProducts: null | any = useSelector(
		(state: RootStore) => state.popularProducts.data
	);

	const handleLinkClick = (category: string) => {
		dispatch(fetchCategoryProducts(category));
	};

	useEffect(() => {
		dispatch(fetchCategories());
		dispatch(fetchPopularProducts());
	}, []);

	return (
		<>
			<div className="intro-section">
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
			<PopularProducts popularProducts={popularProducts} />
		</>
	);
}

export default Home;
