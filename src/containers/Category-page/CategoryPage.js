import data from "../../components/data";
import ProductItem from "../../components/Product-item/ProductItem";

export default function CategoryPage() {
  return (
    <div className="d-flex flex-wrap align-items-start mt-5">
      <div className="productList productList--col-4 pr-4">
        {data.products.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
