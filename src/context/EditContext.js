import { createContext, useReducer } from "react";
import { editReducer } from "../reducers/EditReducer";

import { defaultEditProduct } from "../reducers/EditReducer";

const EditContext = createContext();

export function EditProvider({ children }) {
  const [state, dispatch] = useReducer(editReducer, defaultEditProduct);

  const handlerChooseProduct = (value) => {
    dispatch({ type: 'CHOOSE_PRODUCT', payload: value });
  };

  const handlerChangeName = (value) => {
    dispatch({ type: 'CHANGE_NAME', payload: value });
  };

  const handlerChangeCount = (value) => {
    dispatch({ type: 'CHANGE_COUNT', payload: value });
  };

  const handlerChangePrice = (value) => {
    dispatch({ type: 'CHANGE_PRICE', payload: value });
  };

  const handlerChangeDiscount = (value) => {
    dispatch({ type: 'CHANGE_DISCOUNT', payload: value });
  };

  const handlerCancel = () => {
    dispatch({ type: 'CANCEL'});
  };

  const context = {
    id: state.id,
    count: state.count,
    discount: state.discount,
    name: state.name,
    price: state.price,
    isEdit: state.isEdit,
    handlerChooseProduct: handlerChooseProduct,
    handlerChangeName: handlerChangeName,
    handlerChangeCount: handlerChangeCount,
    handlerChangePrice: handlerChangePrice,
    handlerChangeDiscount: handlerChangeDiscount,
    handlerCancel: handlerCancel
  };

  return (
    <EditContext.Provider value={context}>{children}</EditContext.Provider>
  );
}
export default EditContext;
