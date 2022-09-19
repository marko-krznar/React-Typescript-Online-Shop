import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

import CartItem from "../../components/Cart-item/CartItem";
import { CartContext } from "../../api/CartContext";
import SummaryItem from "../../components/Summary-item/SummaryItem";

export default function Cart() {
	const [cart, setCart] = useContext(CartContext);

	// const handleCheckout = () => {
	// 	alert("Checkout");
	// };

	const handleClearAll = () => {
		setCart([]);
	};

	const renderButtonClearAll = () => {
		if (cart.length > 0) {
			return (
				<button
					className="btn cart-products-remove-btn"
					onClick={handleClearAll}
				>
					Clear All
				</button>
			);
		}
	};

	const renderCart = () => {
		if (cart.length > 0) {
			return (
				<>
					<div className="cart-products-wrapper">
						<table className="product-table">
							<thead>
								<tr>
									<th colSpan={2}>Product</th>
									<th>Price</th>
									<th>{renderButtonClearAll()}</th>
								</tr>
							</thead>
							<tbody>
								{cart.map((cartItem, index) => (
									<CartItem key={index} cartItem={cartItem} />
								))}
							</tbody>
						</table>
					</div>
					<div className="cart-summary-wrapper">
						<h2 className="cart-headline-text">Summary</h2>
						<table className="summary-table">
							<tbody>
								{cart.map((summaryItem, index) => (
									<SummaryItem
										key={index}
										summaryItem={summaryItem}
									/>
								))}
								<tr class="product-row-total">
									<td class="product-row-name">Total</td>
									<td class="product-row-price">1000 €</td>
								</tr>
							</tbody>
						</table>
						<button
							className="btn cart-summary-checkout-btn"
							// onClick={handleCheckout}
						>
							Checkout
						</button>
					</div>
				</>
			);
		}

		return (
			<div className="cart-messege-wraper">
				<h2 className="messege-wraper-headline">No products in cart</h2>
				<Link className="btn" to={"/products"}>
					Go to products
				</Link>
			</div>
		);
	};
	// 			<table className="summary-table">
	// 				<tbody>
	// 					{cart.map((summaryItem, index) => (
	// 						<SummaryItem
	// 							key={index}
	// 							summaryItem={summaryItem}
	// 						/>
	// 					))}
	// 				</tbody>
	// 			</table>
	// 		);
	// 	}
	// };

	// const renderButtonCheckout = () => {
	// 	if (cart.length > 0) {
	// 		return (
	// 			<button
	// 				className="btn cart-summary-checkout-btn"
	// 				onClick={handleCheckout}
	// 			>
	// 				Checkout
	// 			</button>
	// 		);
	// 	}
	// };

	return (
		<main className="page-wrapper cart-page-wrapper">
			<section className="breadcrumb-wrapper">
				<Link className="d-flex align-items-center" to={"/products"}>
					<BsArrowLeft />
					<span className="breadcrumb-wrapper-text">
						Back to products
					</span>
				</Link>
			</section>
			<section className="cart-wrapper d-flex align-items-start justify-content-center">
				{renderCart()}
			</section>
		</main>
	);
}
