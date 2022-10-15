const SummaryItem = ({ summaryItem }) => {
	return (
		<tr className="product-row">
			<td className="product-row-name">{summaryItem.name}</td>
			<td className="product-row-price">
				{summaryItem.price * summaryItem.quantity} €
			</td>
		</tr>
	);
};

export default SummaryItem;
