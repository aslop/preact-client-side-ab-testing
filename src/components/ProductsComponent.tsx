import { useContext } from 'preact/hooks';
import { AppContext } from '../store/context';

const Mycomp = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div>
      <button
        style={{
          background: 'green',
          color: 'white',
          padding: '0.5rem 1.5rem',
          borderRadius: '4px',
        }}
        onClick={() => {
          dispatch({
            type: 'CREATE_PRODUCT',
            payload: {
              id: Math.round(Math.random() * 10000),
              name: `Product-${Math.round(Math.random() * 10000)}`,
              price: Math.round(Math.random() * 10000),
            },
          });
        }}
      >
        Add Product
      </button>

      <div>{JSON.stringify(state)}</div>
    </div>
  );
};

export default Mycomp;
