import "./Footer.css";

export default function Footer({ itemsCount, setItems }) {
  function resetItems() {
    setItems([]);
  }

  return (
    <div className="footer">
      {itemsCount === 0 ? (
        "Aucun objet"
      ) : (
        <>
          <p>Vous avez {itemsCount} objets</p>
          <button onClick={resetItems}>Réinitialiser les objets</button>
        </>
      )}
    </div>
  );
}
