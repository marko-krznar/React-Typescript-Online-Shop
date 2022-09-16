import React from "react";

import { Link } from "react-router-dom";

const Homepage = () => {
	return (
		<main className="page-wrapper">
			<h1>BatM's</h1>
			<p>
				This is a test site made for learning. For using coupon write in
				field PROMO30. It will reduce total for 30%.
			</p>
			<Link className="btn" to="/products">
				Products
			</Link>
		</main>
	);
};

export default Homepage;
