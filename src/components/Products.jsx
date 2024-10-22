import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import Loader from "./Loader";

function Products() {
  //   function getProducts() {
  //     fetch("https://dummyjson.com/products")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   }

  const [products, setProducts] = useState([]);
  const [loading, setLoader] = useState(false)


  useEffect(() => {
    getProducts();
  },[])
  
  async function getProducts() {
    setLoader(true)
    try {
      const response = await axios.get("https://dummyjson.com/products");
      console.log(response.data.products);

      setProducts(response.data.products);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      console.error("Error fetching products:", error);
    }
  }

  
  return (
    <>
      <div className="container">
        <h1>Products </h1>

        <div className="row">
          {loading && <Loader />}
          {products.map((product, index) => (
           <Product product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
