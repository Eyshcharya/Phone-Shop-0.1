import { useDispatch } from 'react-redux';
import { Plus, Minus } from '../../assets/icon';
import { removeItem, addItem, reduceItem } from '../../Features/CartSlice';

const CartItem = ({ id, img, title, amount, price }) => {
  const dispatch = useDispatch();

  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button
          className='remove-btn'
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          Remove
        </button>
      </div>
      <div>
        <button
          className='amount-btn'
          onClick={() => {
            dispatch(addItem({ id }));
          }}
        >
          <Plus />
        </button>
      </div>
      <div>
        <p className='amount'>{amount}</p>
      </div>
      <div>
        <button
          className='amount-btn'
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
            }
            dispatch(reduceItem({ id }));
          }}
        >
          <Minus />
        </button>
      </div>
    </article>
  );
};
export default CartItem;
