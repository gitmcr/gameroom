export default function Ecran({ valeur }) {
  return (
    <div>
      <input
        className="input"
        placeholder="0"
        type="text"
        value={valeur}
        readOnly
      />
    </div>
  );
}
