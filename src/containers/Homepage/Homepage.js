import React from "react";
// import Products from '../../components/Products';
// import data from "../../components/data";
import CategoryPage from "../Category-page/CategoryPage";

function Homepage() {

    // const { products } = data;

    return (
        <div>
            <main className="p-4">
                <h1 className="text-center display-1 font-weight-bold">
                    BatM's
                </h1>
                <p className="text-center text--hd-desc">
                    This is a test site made for learning. For using coupon
                    write in field PROMO30. It will reduce total for 30%.
                </p>
                {/* <Products products={products} /> */}
                <CategoryPage />
            </main>
        </div>
    );
}

export default Homepage;
