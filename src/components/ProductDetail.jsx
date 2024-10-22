import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ProductDetail() {

    const [product, setProduct] = useState([]);
    const param = useParams()

    console.log(param.productId)

    useEffect(() => {
        getProductDetail();
      },[])
      
      async function getProductDetail() {
        try {
          const response = await axios.get(`https://dummyjson.com/products/${param.productId}`);
          setProduct(response.data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      }

      console.log('data', product)


  return (
    <div className='container'>
        <h1>Product Details</h1>

        <div className="row">
            <div className="col-md-6">
            <img src={product.thumbnail} alt="" />
            </div>
            <div className="col-md-6">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <div>{product.price}</div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail