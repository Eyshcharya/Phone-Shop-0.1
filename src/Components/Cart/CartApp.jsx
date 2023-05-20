import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import CartContainer from './CartContainer';
import Navbar from '../Navbar';
import Modal from '../Cart/Modal';
import { calculateTotal } from '../../Features/CartSlice';

function CartApp() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(calculateTotal());
  });

  return (
    <div>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default CartApp;
