import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import rating from '../images/rating.svg'

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="card " key={id}>
        <Link to={`/product/${id}`}>  
          <div className="">
            <div className="">
              <div className="">
                <img  src={image} alt={title}  className="h-[420px] rounded-[8px] "/>
              </div>
              <div className="card-content">
                <div className="mb-[7.8px] mt-[10px]">Lorem Ipsum</div>
                <div className="mb-[7.8px]"> <img src=  {rating}>
                </img></div>
                <div className="mb-[7.8px]">{category}</div>
                <div className="">$ {price}</div>

              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
