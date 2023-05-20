import { useDispatch } from 'react-redux';
import { CloseModal } from '../../Features/ModalSlice';

const BuildModal = () => {
  const dispatch = useDispatch();

  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h5>Still on Build</h5>
        <button
          onClick={() => {
            dispatch(CloseModal());
          }}
        >
          close
        </button>
      </div>
    </aside>
  );
};
export default BuildModal;
