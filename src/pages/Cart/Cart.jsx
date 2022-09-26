import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deleteCartAction,upDownQuantityAction} from '../../redux/reducers/productReducer'

export default function Cart() {
  const {cart} = useSelector(state=>state.productReducer)
  const {userLogin} = useSelector(state=>state.userReducer)
  const dispatch = useDispatch()
  const deleteItem = (itemId) =>{
    dispatch(deleteCartAction(itemId))
  }
  const upDownItem = ({itemId,num})=>{
    dispatch(upDownQuantityAction({itemId,num}))
  }
  const orderConfirm = async() => {
    let email = userLogin.email
    let orderDetail = [...cart]
    for (let order of orderDetail){
      delete Object.assign(order,{id:order.productId})['id']
      delete Object.assign(order,{count:order.quantity})['count']
    }
    console.log(orderDetail);
    try {
      const result = await axios({
        url:"https://shop.cyberlearn.vn/api/Users/order",
        method:"POST",
        data:{
          orderDetail:orderDetail,
          email:email
        }
      })
      alert("Đặt hàng thành công")
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  const renderCartItem = () =>{
    if(cart.length !== 0){
      return cart.map(cartItem=>{
        return (
          <tr key={cartItem.id}>
            <td>{cartItem.id}</td>
            <td>
              <img
                src={cartItem.image}
                alt={cartItem.name}
                width={85}
                height={56}
              />
            </td>
            <td>{cartItem.name}</td>
            <td>{cartItem.price}$</td>
            <td>
              <button
                className="btn me-2 btn-upDown"
                onClick={() => {
                  upDownItem({ itemId: cartItem.id, num: 1 });
                }}
              >
                +
              </button>
              <span className='count'>{cartItem.count}</span>
              <button
                className="btn ms-2 btn-upDown"
                onClick={() => {
                  upDownItem({ itemId: cartItem.id, num: -1 });
                }}
              >
                -
              </button>
            </td>
            <td className='totalPrice'>{cartItem.price * cartItem.count}$</td>
            <td>
              <button
                className="btn btn-danger me-2 text-uppercase"
                onClick={() => {
                  deleteItem(cartItem.id);
                }}
              >
                Delete
              </button>
              <NavLink
                to={`/detail/${cartItem.id}`}
                className="btn btn-primary ms-2 text-uppercase"
              >
                Go to
              </NavLink>
            </td>
          </tr>
        );
      })
    }else{
      return (
        <tr>
        <td>...</td>
        <td>...</td>
        <td>...</td>
        <td>...</td>
        <td>...</td>
        <td>...</td>
        <td>...</td>
      </tr>
      )
    }
  }
  return (
    <div className='cart'>
      <div className="container">
        <h3 className='title'>Carts</h3>
        <hr />
        <div className="cart-content mt-5 position-relative">
          <div className="table-responsive ">
            <table className='table table-borderless table-hover'>
              <thead className='text-center'>
                <tr>
                  <th>ID</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className='text-center'>
                {renderCartItem()}
              </tbody>
            </table>
          </div>
          <button className='btn btn-submitOrder btn-dark text-white position-absolute text-uppercase' style={{bottom:-30,right:0}} onClick={() => {
            orderConfirm()
          }}>Submit Order</button>
        </div>
      </div>
    </div>
  )
}
