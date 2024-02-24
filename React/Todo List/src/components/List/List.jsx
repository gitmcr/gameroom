import Item from "../Item/Item";

import "./List.css";

export default function List({ items, setItems, itemsCount }) {
  function handleDeleteItem(index) {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  }

  return (
    <div className="list">
      {itemsCount === 0 ? "Ajoutez un objet" : "Liste :"}
      {items.map((item, index) => (
        <Item
          key={index}
          item={item}
          onDeleteItem={handleDeleteItem}
          index={index}
        />
      ))}
    </div>
  );
}
