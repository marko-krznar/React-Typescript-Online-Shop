export const renderPrice = (price: number) => {
	const priceSymbol = "€";

	return priceSymbol + price.toFixed(2);
};
