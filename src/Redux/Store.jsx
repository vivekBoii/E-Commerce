import { configureStore } from '@reduxjs/toolkit';
import userSlice from './User/UserReducer';
import ProductReducer from './Products/ProductReducer';

export const store = configureStore({
  reducer: {
    user: userSlice,
    product : ProductReducer,
  },
})

export default store;