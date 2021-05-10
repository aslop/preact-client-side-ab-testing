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

      <div>
        {state.products
          ? state.products.map(({ id, name, price }) => {
              return (
                <div style={{ padding: '1rem' }} key={id}>
                  <div
                    style={{
                      border: '1px solid green',
                      borderRadius: '4px',
                      padding: '1rem',
                    }}
                  >
                    <div>{name}</div>
                    <div>{price}</div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Mycomp;
