import React from "react";
import styles from "./ViewList.module.css";
import Input from "./Input";
import "./Edit.css";

import { useContext, useState } from "react";
import ModeContext from "../context/ModeContext";
import Button from "./Button";
import EditContext from "../context/EditContext";

const Edit = ({ editItem, handlerSubmitEdit }) => {

  const modeCtx = useContext(ModeContext);
  const editCtx = useContext(EditContext);

  return (
    <div>
      <table className={`${styles.table} ${!modeCtx.isLight && styles.dark}`}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Disc %</th>
          </tr>
        </thead>
        <tbody>
          <tr key={editItem.id}>
            <td>
              <Input value={editCtx.name} onChange={editCtx.handlerChangeName} />
            </td>
            <td>
              <Input value={editCtx.count}  onChange={editCtx.handlerChangeCount}/>
            </td>
            <td>
              <Input value={editCtx.price}  onChange={editCtx.handlerChangePrice}/>
            </td>
            <td>
              <Input
                value={editCtx.discount}
                onChange={editCtx.handlerChangeDiscount}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className={"center"}>
        <Button label="Submit" onClick={handlerSubmitEdit}/>
        <Button label="Cancel" onClick={editCtx.handlerCancel}/>
      </div>
    </div>
  );
};

export default Edit;
