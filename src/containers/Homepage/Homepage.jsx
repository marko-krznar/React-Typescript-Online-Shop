import React from "react";
// import { GiBatWing } from "react-icons/gi";

import { Link } from "react-router-dom";

const Homepage = () => {
	return (
		<main className="page-wrapper homepage-wrapper d-flex align-items-center">
			<div className="home-info">
				<h1>BatM's</h1>
				<p>
					This is a test site made for learning. For using coupon
					write in field PROMO30. It will reduce total for 30%.
				</p>
				<Link className="btn" to="/React-Webshop/products">
					Products
				</Link>
			</div>
			{/* <div className="home-illustration">
				<GiBatWing />
			</div> */}
		</main>
	);
};

export default Homepage;
