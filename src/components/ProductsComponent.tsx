import { useContext } from 'preact/hooks';
import { AppContext } from '../store/context';

const Mycomp = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleDelete = (id) => {
    dispatch({
      type: 'DELETE_PRODUCT',
      payload: { id },
    });
  };

  const handleAdd = () => {
    dispatch({
      type: 'CREATE_PRODUCT',
      payload: {
        id: Math.round(Math.random() * 10000),
        name: `Product-${Math.round(Math.random() * 10000)}`,
        price: Math.round(Math.random() * 10000),
      },
    });
  };

  return (
    <div>
      <button
        style={{
          background: 'green',
          color: 'white',
          padding: '0.5rem 1.5rem',
          borderRadius: '4px',
        }}
        onClick={handleAdd}
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

                    <button
                      style={{
                        background: 'red',
                        color: 'white',
                        padding: '0.5rem 1.5rem',
                      }}
                      onClick={() => {
                        handleDelete(id);
                      }}
                    >
                      Delete
                    </button>
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
