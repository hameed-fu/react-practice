import axios from "axios";
import React, { useState } from "react";

function Products() {
  //   function getProducts() {
  //     fetch("https://dummyjson.com/products")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   }

  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      console.log(response.data.products);

      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  getProducts();
  return (
    <>
    <div className="container">
      <h1>Products </h1>

      <div className="row">
    {
        products.map((product, index) => 
        
        <div className="col-md-3">
          <div className="card">
            <img src={product.thumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">
                {product.description}
              </p>
              <p className="d-flex justify-content-between">
                <div>{product.price}</div>
              </p>
            </div>
          </div>
        </div>
        
        )

    }


      </div>
    </div>
    
    </>
  );
}

export default Products;
