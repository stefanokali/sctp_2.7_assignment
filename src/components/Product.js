import { useState, useContext, useMemo } from "react";
import { v4 as uuid } from "uuid";

import styles from "./Product.module.css";
import Card from "./Card";
import ViewList from "./ViewList";

import ProductContext from "../context/ProductContext";
import EditContext from "../context/EditContext";
import ModeContext from "../context/ModeContext";
import Toggle from "./Toggle";
import Edit from "./Edit";

function Product() {
  const ctx = useContext(ProductContext);
  const modeCtx = useContext(ModeContext);
  const editCtx = useContext(EditContext);
  const [list, setList] = useState([]);

  const total = useMemo(() => {
    return list.reduce(
      (accumulated, currentItem) => accumulated + currentItem.total,
      0
    );
  }, [list]);

  /*
    CREATE: Add a new product into the list
  */
  const handlerAddProduct = () => {
    const newItem = {
      id: uuid(),
      name: ctx.name,
      count: ctx.count,
      price: ctx.price,
      discount: ctx.discount,
      total: (ctx.count * ctx.price * (100 - ctx.discount)) / 100,
    };
    const newList = [...list, newItem];
    setList(newList);
  };

  const handlerDeleteProduct = (id) => {
    if (editCtx.id === id && editCtx.isEdit){
      //do nothing if its in edit mode
      return;
    }
    // Create a new item list with everything, except the item with matching ID
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const handlerSubmitEdit = () => {
    const index = list.findIndex((item) => item.id == editCtx.id);
    console.log(editCtx);
    setList((prevList) =>
      prevList.map((o, i) =>
        i === index
          ? {
              ...o,
              name: editCtx.name,
              count: editCtx.count,
              price: editCtx.price,
              discount: editCtx.discount,
              total: (editCtx.count * editCtx.price * (100 - editCtx.discount)) / 100,
            }
          : o
      )
    );
  };

  //---------------------------------------------------------------------------

  return (
    <div className={`${styles.container} ${modeCtx.isDark && styles.dark}`}>
      <Toggle />
      <Card handlerAddProduct={handlerAddProduct} />
      <ViewList
        list={list}
        sum={total}
        handlerDeleteItem={handlerDeleteProduct}
        handlerEditItem={editCtx.handlerChooseProduct}
      />
      {editCtx.isEdit ? (
        <Edit editItem={editCtx} handlerSubmitEdit={handlerSubmitEdit} />
      ) : null}
    </div>
  );
}

export default Product;
