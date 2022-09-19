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
    return productFeatureArr.map((prod,index)=>{
      return (
        <div className="col-lg-4 col-md-6 col-12 product-main-part" key={index}>
          <div className="card text-start m-3">
            <div className="card-top">
              <img className="card-img-top" src={prod.image} alt={prod.name}/>
            </div>
            <div className="card-body">
              <h4 className="card-title product-name">
                {prod.name}
              </h4>
              <p className="card-text product-descript">
                {prod.shortDescription.length>50?prod.shortDescription.substring(0,50):prod.shortDescription}
              </p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
              <NavLink
                to={`/detail/${prod.id}`}
                className="btnBuy w-50 text-center"
              >
                Buy Now
              </NavLink>
              <p className="price d-inline-block text-center w-50 m-0">
                {prod.price}$
              </p>
            </div>
          </div>
        </div>
      );

    })
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
          </div>
          <div className="row" id="productFeatureTbl">
            {renderProductFeature()}
          </div>
        </div>
      </div>
    </div>
  );
}
