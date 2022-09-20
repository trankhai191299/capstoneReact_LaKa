import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:{}
}

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {}
});

export const {} = userReducer.actions

export default userReducer.reducer
