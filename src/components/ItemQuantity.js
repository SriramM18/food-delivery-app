import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemQuantity = ({ item }) => {
  const itemCountInitial = useSelector(
    (store) => store?.cart?.items[item.id]?.quantity
  );

  let [itemCount, setItemCount] = useState(
    !itemCountInitial ? 0 : itemCountInitial
  );

  const dispatch = useDispatch();
  return (
    <div className="item-quantity">
      <button
        onClick={() => {
          dispatch(removeItem(item.id));
          setItemCount(itemCount != 0 ? itemCount - 1 : 0);
        }}
      >
        -
      </button>
      <p className="item-green">{itemCount}</p>
      <button
        className="item-green"
        onClick={() => {
          dispatch(addItem(item));
          setItemCount(itemCount + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default ItemQuantity;
