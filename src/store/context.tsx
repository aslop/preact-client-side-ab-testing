import { useReducer } from 'preact/hooks';
import { createContext, FunctionalComponent } from 'preact';

import { productReducer, ProductActions, ProductType } from './reducers';

type InitialStateType = {
  products: ProductType[];
};

const intialState = {
  products: [],
};

// TODO Must add Preact Dispatch type (?)
const AppContext = createContext<{
  state: InitialStateType;
  dispatch: any;
}>({
  state: intialState,
  dispatch: () => null,
});

const mainReducer = ({ products }: InitialStateType, action: ProductActions) => ({
  products: productReducer(products, action),
});

const AppProvider: FunctionalComponent = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, intialState);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
