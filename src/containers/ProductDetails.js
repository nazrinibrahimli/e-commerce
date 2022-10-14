import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";



const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="h-[533px] w-[356px] flex">
      
            <div className="flex justify-center items-center">
              <div className="">
                <img className="" src={image} />
              </div>
              <div className="card-content">
                <div className="mb-[7.8px] mt-[10px]">Lorem Ipsum</div>
                <div className="mb-[7.8px]"> </div>
                <div className="mb-[7.8px]">{category}</div>
                <div className="">$ {price}</div>

              </div>
            </div>

        </div>
      )}
    </div>
  );
};

export default ProductDetails;
