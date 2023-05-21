import { useSelector } from 'react-redux';
import { Menu } from '../assets/icon';

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);

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
