import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Flex, Typography } from "antd";

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
import Title from "antd/es/typography/Title";

const { Text } = Typography;

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
					<div className="intro-section-element intro-section-element-welcome">
						<Flex
							vertical
							gap="middle"
							justify="center"
							className="intro-section-element-welcome-content"
						>
							<Title level={1}>Welcome</Title>
							<Text type="secondary">
								This project is built to enhance front-end
								development skills.
							</Text>
							<Flex vertical gap="small">
								<Title level={4}>
									Tools used for the project:
								</Title>
								<ul>
									<li>
										<Text type="secondary">React</Text>
									</li>
									<li>
										<Text type="secondary">TypeScript</Text>
									</li>
									<li>
										<Text type="secondary">Redux</Text>
									</li>
									<li>
										<Text type="secondary">Ant Design</Text>
									</li>
								</ul>
							</Flex>
						</Flex>
					</div>
					{categories?.map((category: any, index: number) => (
						<Link
							to={`category/${category}`}
							key={category}
							// TODO replace category-name-${index} with a category name as a class name
							className={`intro-section-element category-name-${index}`}
							onClick={() => handleLinkClick(category)}
						>
							{/* <LaptopOutlined style={{ fontSize: "48px" }} />
						<CrownOutlined style={{ fontSize: "48px" }} />
						<ManOutlined style={{ fontSize: "48px" }} />
						<WomanOutlined style={{ fontSize: "48px" }} /> */}
							<Title level={3}>{category}</Title>
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
