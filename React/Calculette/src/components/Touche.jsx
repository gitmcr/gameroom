export default function Touche({ value, onClick }) {
  return <button onClick={() => onClick(value)}>{value}</button>;
}
