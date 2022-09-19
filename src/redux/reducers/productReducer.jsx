import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../util/setting';

const initialState = {
    arrProduct:[]
}

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    getAllProductAction : (state,action)=>{
      const arrProduct = action.payload
      state.arrProduct = arrProduct
    }
  }
});

export const {getAllProductAction} = productReducer.actions

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