import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getProductDetailApi } from '../../redux/reducers/productReducer';

export default function Detail() {
  const {productDetail} = useSelector(state=>state.productReducer)
  const dispatch = useDispatch()
  const params = useParams()
  const getProductDetail = async() =>{
    let {id} = params
    const getProductDetailAction = getProductDetailApi(id)
    dispatch(getProductDetailAction)
  }
  useEffect(()=>{
    getProductDetail()
  },[params.id])
  const renderItemDetail = () => {
    return (
      <div className="row justify-content-around mt-2" id={params.id}>
        <div className="col-lg-4 col-md-12 mt-5">
          <img
            className="bg-light w-100 border border-secondary border-2 rounded-3"
            src={productDetail?.image}
            alt={productDetail?.name}
          />
        </div>
        <div className="col-lg-6 col-md-12 mt-5">
          <h1>{productDetail?.name}</h1>
          <p>{productDetail?.description}</p>
          <span style={{ display: "block" }} className="mb-2 text-success fw-bold">
            Available size
          </span>
          {/* <button className="me-2 ps-1 pe-1 mt-2">
            {productDetail.size[0]}
          </button>
          <button className="me-2 ps-1 pe-1 mt-2">
            {productDetail.size[1]}
          </button>
          <button className="me-2 ps-1 pe-1 mt-2">
            {productDetail.size[2]}
          </button>
          <button className="me-2 ps-1 pe-1 mt-2">
            {productDetail.size[3]}
          </button>
          <button className="me-2 ps-1 pe-1 mt-2">
            {productDetail.size[4]}
          </button>
          <button className="me-2 ps-1 pe-1 mt-2">
            {productDetail.size[5]}
          </button>
          <button className="me-2 ps-1 pe-1 mt-2">
            {productDetail.size[6]}
          </button> */}
          {/* {productDetail?.size.map((index)=>{
            return  <button className="me-2 ps-1 pe-1 mt-2" key={index}>
                      {productDetail.size[index]}
                    </button>
          })} */}
          <span
            style={{ display: "block" }}
            className="mt-2 mb-2 text-danger fw-bold"
          >
            {productDetail.price}$
          </span>
          <button
            className="add ps-2 pe-2 text-white"
            style={{ backgroundColor: "#6181f3", border: "none" }}
          >
            +
          </button>
          <span className="ms-1 me-1">1</span>
          <button
            className="minus ps-2 pe-2 text-white"
            style={{ backgroundColor: "#6181f3", border: "none" }}
          >
            -
          </button>
          <button
            style={{
              display: "block",
              background:
                "linear-gradient(270deg,rgba(62, 32, 248, 0.9) 5.14%,#d017ee 89.71%)",
              border: "none",
            }}
            className="cart mt-3 p-2 text-white"
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  }
  
  const renderRelatedItem = () =>{
    return productDetail.relatedProducts?.map((item,index)=>{
      return (
        <div className="col-lg-4 col-sm-6 col-12 relate-main-part" key={index}>
          <div className="card text-start m-3">
            <div className="card-top">
              <img className="card-img-top" src={item.image} alt={item.name} />
            </div>
            <div className="card-body">
              <h4 className="card-title product-name">
              {item.name}
              </h4>
              <p className="card-text product-descript">
              {item.shortDescription.length>50?item.shortDescription.substring(0,50):item.shortDescription}
              </p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
              <a
                href="./detail.html?getbyid=${id}"
                className="btnBuy w-50 text-center"
              >
                Buy Now
              </a>
              <p className="price d-inline-block text-center w-50 m-0">
                {item.price}$
              </p>
            </div>
          </div>
        </div>
      );

    })
  }

  return (
      <div>
        <div className="product-detail">
          <div className="container" id="detail">
            {renderItemDetail()}
          </div>
        </div>
        <div className="product-feature">
          <div className="container">
            <div className="title">
              <h3 className="text-center">-Relate Product-</h3>
            </div>
            <div className="row" id="relatedProducts">
              {renderRelatedItem()}
            </div>
          </div>
        </div>
      </div>
    );
  }
