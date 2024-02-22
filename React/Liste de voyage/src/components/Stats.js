export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Rentre les objets dont tu as besoin pour ton voyage 🚀</em>
      </p>
    );

  // Derived state
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  let percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? 'Tu as tout! Tu es prêt(e) à partir 🛫'
          : `👜 Tu as ${numItems} objets dans ta liste et tu en as déjà coché ${numPacked} (${percentage}%) 👜`}
      </em>
    </footer>
  );
}
