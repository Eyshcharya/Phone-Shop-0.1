import { useDispatch, useSelector } from 'react-redux';
import { Plus, Minus } from '../../assets/icon';
import { removeItem, addItem, reduceItem } from '../../Features/CartSlice';
import { useState, useCallback } from 'react';

const TestItem = ({ id, title, img, price, amount }) => {
  const dispatch = useDispatch();

  const items = JSON.parse(localStorage.getItem('itemsArray'));
  const [cartItems, setCartItems] = useState(items);

  const handleRemoveItem = useCallback(
    (id) => {
      const oldItems = JSON.parse(localStorage.getItem('itemsArray') || []);
      const newCartItems = oldItems.filter((item) => item.id !== id);
      setCartItems(newCartItems);
      localStorage.setItem('itemsArray', JSON.stringify(cartItems));
      console.log('okay');
    },
    [cartItems]
  );

  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button
          className='remove-btn'
          onClick={() => {
            handleRemoveItem(id);
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
export default TestItem;
