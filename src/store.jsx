import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './Features/CartSlice';
import modalReducer from './Features/ModalSlice';
import homeReducer from './Features/HomeSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    home: homeReducer,
  },
});
