import { createSlice } from '@reduxjs/toolkit'
import { http, setStoreJson,CART, getStoreJson } from '../../util/setting';

const initialState = {
    arrProduct:[],
    productDetail:{},
    cart:[],
}

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    getAllProductAction : (state,action)=>{
      const arrProduct = action.payload
      state.arrProduct = arrProduct
    },
    getProductDetailAction : (state,action)=>{
      const productDetail = action.payload
      state.productDetail = productDetail
    },
    addCartAction: (state,action)=>{
      let {cartItem,count} = action.payload
      let cartUpdate = [...state.cart]
      cartItem = {...cartItem,count}
      let indexItem = cartUpdate.findIndex(sp=>sp.id===cartItem.id)
      if(indexItem === -1){
        cartUpdate.push(cartItem)
      }else{
        cartUpdate[indexItem].count += cartItem.count
      }
      state.cart = cartUpdate
      setStoreJson(CART,state.cart)
      if(state.cart){
        alert('Thêm vào giỏ hàng thành công')
      }else{
        alert('Thêm thất bại. Xin hãy thử lại')
      }
    },
    upDownQuantityAction:(state,action)=>{
      let {itemId,num} = action.payload
      let cartUpdate = [...state.cart]
      let index = cartUpdate.findIndex(sp=>sp.id===itemId)
      if(index !== -1){
        cartUpdate[index].count += num
        if(cartUpdate[index].count < 1){
          if(window.confirm('Xác nhận xóa sản phẩm khỏi giỏ hàng?')){
            cartUpdate = cartUpdate.filter(sp=>sp.id !== itemId)
          }else{
            cartUpdate[index].count -= num
          }
        }
      }
      state.cart = cartUpdate
    },
    deleteCartAction:(state,action)=>{
      let cartItemId = action.payload
      let cartUpdate = [...state.cart]
      if(window.confirm('Bạn muốn xóa sản phẩm này?')){
        cartUpdate = cartUpdate.filter(it=>it.id!==cartItemId)
      }
      state.cart = cartUpdate
    },
    // orderItemAction:(state,action)=>{
    //   let {itemId,quantity,email} = action.payload
    //   let orderItem = {itemId,quantity}
    //   let orderDetail = [...orderItem,email]
    //   orderDetail.push(orderItem)
      
    // }
  }
});

export const {getAllProductAction,getProductDetailAction,addCartAction,deleteCartAction,upDownQuantityAction,orderItemAction} = productReducer.actions

export default productReducer.reducer

//-----------------------action api-------------//
export const getAllProductApi = () =>{
  return async (dispatch)=>{
    try {
      let result = await http.get('/product')

      const action = getAllProductAction(result.data.content)
      dispatch(action)
    } catch (error) {
      console.log(error);
    }
  }
}

export const getProductDetailApi = (id) =>{
  return async (dispatch)=>{
    try {
      let result = await http.get(`/product/getbyid?id=${id}`)
      const action = getProductDetailAction(result.data.content)
      dispatch(action)
    } catch (error) {
      console.log(error);
    }
  }
}

// export const orderItemApi = (order)=>{
//   return async (dispatch)=>{
//     try {
//       if(order.orderDetail.length !== 0){
//         let result = await http.post('/users/order',order)
//         getProfileApi()
//         alert('Đã order thành công!')
//       }else{
//         alert('Xin vui lòng thử lại')
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }