import { useState } from 'react';
import Item from './Item';

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onResetItem,
}) {
  const [sortby, setSortBy] = useState('input');

  let sortedItems;

  if (sortby === 'input') sortedItems = items;
  if (sortby === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortby === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
      <div class="actions">
        <select value={sortby} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Filtrer par ordre d'entrée</option>
          <option value="description">Filtrer par description</option>
          <option value="packed">Filtrer par cochage</option>
        </select>
        <button onClick={onResetItem}>Réinitialiser</button>
      </div>
    </div>
  );
}
