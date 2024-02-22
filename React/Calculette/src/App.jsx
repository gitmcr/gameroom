import { useState } from "react";
import Ecran from "./components/Ecran";
import Touches from "./components/Touches";

export default function App() {
  const [valeur, setValeur] = useState("");

  const handleToucheClick = (touche) => {
    if (touche === "=") {
      try {
        setValeur(eval(valeur).toString());
      } catch (error) {
        setValeur("Erreur");
      }
    } else {
      setValeur((prevValeur) => prevValeur + touche);
    }
  };

  const handleResetClick = () => {
    setValeur("");
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="logo">
          <a href="https://github.com/gitmcr" target="_blank">
            <img src="./logo.png" alt="pp" width="50" />
          </a>
          <h3>mcrCalc</h3>
        </div>
        <Ecran valeur={valeur} />
        <Touches
          onToucheClick={handleToucheClick}
          onResetClick={handleResetClick}
        />
      </div>
    </div>
  );
}
