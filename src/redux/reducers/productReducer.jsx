import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../util/setting';

const initialState = {
    arrProduct:[],
    productDetail:{},
    cart:[]
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
      let item = cartUpdate.find(sp=>sp.id===cartItem.id)
      if(!item){
        cartItem = {...cartItem,count}
        cartUpdate.push(cartItem)
      }else{
        cartItem = {...cartItem,count}
        cartItem.count+=count
      }
      state.cart = cartUpdate
      if(state.cart){
        alert('Thêm vào giỏ hàng thành công')
      }else{
        alert('Thêm thất bại. Xin hãy thử lại')
      }
    },
    upDownQuantityAction:(state,action)=>{
      
    },
    deleteCartAction:(state,action)=>{
      let cartItemId = action.payload
      let cartUpdate = [...state.cart]
      cartUpdate = cartUpdate.filter(it=>it.id!==cartItemId)
      state.cart = cartUpdate
    }
  }
});

export const {getAllProductAction,getProductDetailAction,addCartAction,deleteCartAction} = productReducer.actions

export default productReducer.reducer

//-----------------------action api-------------//
export const getAllProductApi = () =>{
  return async (dispatch)=>{
    try {
      let result = await http.get('product')

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