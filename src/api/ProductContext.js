import React, { useState, createContext } from "react";
import plant from "../images/plant.jpg";
import glasses from "../images/glasses.jpg";
import bag from "../images/bag.jpg";
import watch from "../images/watch.jpg";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
	const [products, setProducts] = useState([
		{
			id: 1,
			name: "Awesome Plant",
			slug: "awesome-plant",
			price: 1400,
			image: plant,
			quantity: 0,
			alt: "Plant",
			imgAuthor: "Galina N",
			imgAuthorLink:
				"https://unsplash.com/@galina88?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
			imgSource:
				"https://unsplash.com/s/photos/product?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
			desc: "Dolorum magni neque sapiente quam nostrum facilis hic necessitatibus numquam facere ex esse.",
		},
		{
			id: 2,
			name: "Smartest Watch",
			slug: "smartest-watch",
			price: 1200,
			quantity: 0,
			image: watch,
			alt: "Watch",
			imgAuthor: "Rachit Tank",
			imgAuthorLink:
				"https://unsplash.com/@rachitank?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
			imgSource:
				"https://unsplash.com/s/photos/product?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
			desc: "Dolorum magni neque sapiente quam nostrum facilis hic necessitatibus numquam facere ex esse.",
		},
		{
			id: 3,
			name: "Coolest Sunglasses",
			slug: "coolest-sunglasses",
			price: 900,
			quantity: 0,
			image: glasses,
			alt: "Sunglasses",
			imgAuthor: "Charles Deluvio",
			imgAuthorLink:
				"https://unsplash.com/@charlesdeluvio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
			imgSource:
				"https://unsplash.com/s/photos/product?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
			desc: "Dolorum magni neque sapiente quam nostrum facilis hic necessitatibus numquam facere ex esse.",
		},
		{
			id: 4,
			name: "Best Grocery bag",
			slug: "best-grocery-bag",
			price: 1000,
			quantity: 0,
			image: bag,
			alt: "Grocery bag",
			imgAuthor: "Kelly Sikkema",
			imgAuthorLink:
				"https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
			imgSource:
				"https://unsplash.com/s/photos/product?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
			desc: "Dolorum magni neque sapiente quam nostrum facilis hic necessitatibus numquam facere ex esse.",
		},
	]);
	return (
		<ProductContext.Provider value={[products, setProducts]}>
			{props.children}
		</ProductContext.Provider>
	);
};
