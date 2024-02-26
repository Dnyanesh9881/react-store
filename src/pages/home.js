import React, { useEffect, useState } from "react";

import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../toolkit/actions/productAction";
import Loading from "../components/Loading";
import { searchForProducts } from "../toolkit/slices/productSlice";
import Error from "../components/Error";

function Home() {
  const [query, setQuery] = useState("");
  const { products, isLoading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    dispatch(searchForProducts(query));
  }, [query]);

  return (
    <main className="p-4 w-ful">
      <header className="flex flex-col justify-center text-center gap-4">
        <h1 className="text-7xl font-bold">ALL STORE</h1>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search all products"
            className="border-gray-200 border-2 rounded outline-none p-1 w-1/2"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <hr className="border-1 font-bold border-gray-400" />
      </header>
      <div className="flex flex-col gap-7 justify-center text-center p-4 mt-4">
        <h3>Products</h3>
        {isLoading && <Loading />}
        {error && <Error e={error}/>}
        <list className="flex flex-wrap justify-center gap-8">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </list>
      </div>
    </main>
  );
}

export default Home;
