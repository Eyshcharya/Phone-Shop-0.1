import { useSelector } from 'react-redux';
import TestItem from './TestItem';
import { useEffect, useState } from 'react';
import { useCallback } from 'react';

const TestCart = () => {
  const items = JSON.parse(localStorage.getItem('itemsArray'));
  const [cartItems, setCartItems] = useState(items);

  return (
    <div>
      <button
        onClick={() => {
          const item = JSON.parse(localStorage.getItem('itemsArray'));
          item.pop();
          localStorage.setItem('itemsArray', JSON.stringify(item));
          setCartItems(item);
        }}
      >
        Remove last item from LS
      </button>

      {/* <h2>yo</h2>

      {cartItems.map((item) => {
        return <TestItem key={item.id} {...item} />;
      })} */}
    </div>
  );
};
export default TestCart;
