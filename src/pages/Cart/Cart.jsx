import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { deleteCartAction } from '../../redux/reducers/productReducer'

export default function Cart() {
  const {cart} = useSelector(state=>state.productReducer)
  const dispatch = useDispatch()
  const deleteItem = (itemId) =>{
    dispatch(deleteCartAction(itemId))
  }
  const renderCartItem = () =>{
    if(cart.length !== 0){
      return cart.map(cartItem=>{
        return <tr key={cartItem.id}>
        <td>{cartItem.id}</td>
        <td>
          <img src={cartItem.image} alt={cartItem.name} width={85} height={56}/>
        </td>
        <td>{cartItem.name}</td>
        <td>{cartItem.price}$</td>
        <td>
          <button className='btn btn-primary me-2'>+</button>
          {cartItem.count}
          <button className='btn btn-primary ms-2'>-</button>
        </td>
        <td>{cartItem.price * cartItem.count}$</td>
        <td>
          <button className='btn btn-danger ms-2' onClick={()=>{
            deleteItem(cartItem.id)
          }}>Delete</button>
        </td>
      </tr>
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
                <tr className='table-light'>
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
                {/* <tr>
                  <td>1</td>
                  <td>
                    <img src="https://picsum.photos/85/56" alt="..." />
                  </td>
                  <td>Product 1</td>
                  <td>1000$</td>
                  <td>
                    <button className='btn btn-primary me-2'>+</button>
                    25
                    <button className='btn btn-primary ms-2'>-</button>
                  </td>
                  <td>25000$</td>
                  <td>
                    
                    <button className='btn btn-danger ms-2'>Delete</button>
                  </td>
                </tr> */}
                {renderCartItem()}
              </tbody>
            </table>
          </div>
          <button className='btn btn-dark text-white position-absolute' style={{bottom:-25,right:0}}>Submit Order</button>
        </div>
      </div>
    </div>
  )
}
