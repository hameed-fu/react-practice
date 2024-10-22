import React from "react";
import { Link } from "react-router-dom";

function Product({ product}) {
  return (
    <div className="col-md-3">
      <div className="card mt-2">
        <img src={product.thumbnail} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            <Link to={`/product-detail/${product.id}`}>{product.title}</Link>
          </h5>
          <p className="card-text">{product.description}</p>
          <div className="d-flex inlin justify-content-between">
            <div>{product.price}</div>
            <div>{product.category}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
