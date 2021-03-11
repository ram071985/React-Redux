import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems, loadItems, addItem } from "../store/items";

const Items = () => {
  const dispatch = useDispatch();
  const items = useSelector(getItems);
  console.log(items);
   useEffect(() => {
       dispatch(loadItems());
  }, []);

 

  return (
      <div>
    <form >
      <input></input>
      <button onClick={(item) => dispatch(addItem(item.description = "Item 4"))}type="submit">
        PUSH
      </button>
    </form>
    {items.map((item) => (
        <p key={item.id}>{item.description}</p>
    ))}
  </div>
  );
};

export default Items;
