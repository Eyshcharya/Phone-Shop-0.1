import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { OpenModal } from '../../Features/ModalSlice';
import { useState } from 'react';

const CartContainer = () => {
  const dispatch = useDispatch();

  const { total, isClear, amount } = useSelector((store) => store.cart);

  const items = JSON.parse(localStorage.getItem('itemsArray') || []);
  const [cartItems, setCartItems] = useState(items);

  const handleClear = () => {
    if (isClear) {
      return (
        <footer>
          <button className='btn clear-btn'>clear cart</button>
        </footer>
      );
    }
    dispatch(OpenModal());
  };

  if (amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className='cart'>
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={handleClear}>
          clear cart
        </button>
      </footer>
    </section>
  );
};
export default CartContainer;
