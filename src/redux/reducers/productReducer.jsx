import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../util/setting';

const initialState = {
    arrProduct:[],
    productDetail:{},
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
    }
  }
});

export const {getAllProductAction,getProductDetailAction} = productReducer.actions

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