import Touche from "./Touche";

export default function Touches({ onToucheClick, onResetClick }) {
  const touches = [
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "/",
    "=",
  ];

  return (
    <>
      <div className="button-grid">
        {touches.map((touche) => (
          <Touche key={touche} value={touche} onClick={onToucheClick} />
        ))}
      </div>
      <div className="button-reset">
        <div className="button-reset">
          <Touche value="AC" onClick={onResetClick} />
        </div>
      </div>
    </>
  );
}
