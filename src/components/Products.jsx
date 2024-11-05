import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import Loader from "./Loader";
import PageTitle from "./PageTitle";

function Products() {
  //   function getProducts() {
  //     fetch("https://dummyjson.com/products")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   }

  const [products, setProducts] = useState([]);
  const [loading, setLoader] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  let pageSize = 30;

  useEffect(() => {
    getProducts();
  }, [pageNumber]);

  async function getProducts() {
    setLoader(true);
    try {
      const skip = pageNumber * pageSize;
      const response = await axios.get(
        `https://dummyjson.com/product?limit=${pageSize}&skip=${skip}`
      );
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoader(false);
    }
  }

  const handleNextPage = () => {
    setPageNumber((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPageNumber((prevPage) => (prevPage > 0 ? prevPage - 1 : 0));
  };

  return (
    <>
      <PageTitle title="Products" />
      <div className="container">
        <h1>Products </h1>

        <div className="row">
          {loading && <Loader />}
          {products.map((product, index) => (
            <Product product={product} />
          ))}
        </div>

        <div className="mt-3">
          <button
            className="btn btn-primary"
            onClick={handlePreviousPage}
            disabled={pageNumber === 0}
          >
            Previous
          </button>
          <span> Page {pageNumber + 1} </span>
          <button
            className="btn btn-primary"
            onClick={handleNextPage}
            disabled={products.length < pageSize}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Products;
