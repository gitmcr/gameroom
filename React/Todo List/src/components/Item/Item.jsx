import { useState } from "react";

import "./Item.css";

export default function Item({ item, onDeleteItem, index }) {
  const [checked, setChecked] = useState(false);

  function handleDelete() {
    onDeleteItem(index);
  }

  return (
    <div className="item">
      <div className="itemcheck">
        <input type="checkbox" onChange={(e) => setChecked(e.target.checked)} />
        <p className={"" + (checked ? "checkedclass" : "")}>{item}</p>
      </div>
      <button onClick={handleDelete}>-</button>
    </div>
  );
}
