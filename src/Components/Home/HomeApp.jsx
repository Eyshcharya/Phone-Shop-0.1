import { useSelector, useDispatch } from 'react-redux';
import TestCart from '../Cart/TestCart';
import Navbar from '../Navbar';
import HomeContainer from './HomeContainer';
import BuildModal from './BuildModal';

const HomeApp = () => {
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, []);
  return (
    <div>
      {isOpen && <BuildModal />}
      <Navbar />
      <HomeContainer />
      <TestCart />
    </div>
  );
};
export default HomeApp;
