import { useSelector, useDispatch } from 'react-redux';
import { Menu } from '../assets/icon';
import { useEffect } from 'react';
import { calculateTotal } from '../Features/CartSlice';

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, []);

  return (
    <nav className='nav-container'>
      <div className='menu-icon'>
        <Menu />
      </div>
      <h3>Phone Shop</h3>
      <div>
        <a href='../../Cart.html'>
          <img
            className='cart-icon'
            src='/icons/fast-cart.png'
            alt='cart icon'
          />
        </a>
        <div className='amount-container'>{amount}</div>
      </div>
    </nav>
  );
};
export default Navbar;
