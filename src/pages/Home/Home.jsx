import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from 'react'
import {NavLink,useNavigate} from 'react-router-dom'
import { getAllProductApi } from "../../redux/reducers/productReducer";
import { randomProductItem } from "../../util/setting";
export default function Home() {
  const {arrProduct} = useSelector(state=>state.productReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const getAllProduct = () =>{
    const getProductAction = getAllProductApi()
    dispatch(getProductAction)
  }
  useEffect(()=>{
    getAllProduct()
  },[])
  const renderProductFeature = () => {
    let productFeatureArr = randomProductItem(arrProduct,6);
    console.log(productFeatureArr);
  }
  
  return (
    <div>
      <div className="carousel">
        <div className="container">
          <div className="carousel-content slick-ready" id="carousel-content" />
        </div>
      </div>
      <div className="product-feature">
        <div className="container">
          <div className="title">
            <h3 className="text-center">-Product Feature -</h3>
            {renderProductFeature()}
          </div>
          <div className="row" id="productFeatureTbl" />
        </div>
      </div>
    </div>
  );
}
