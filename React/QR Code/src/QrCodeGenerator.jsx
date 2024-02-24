import { useState } from "react";
import QRCode from "react-qr-code";
import logo from "./assets/sqlogo.png";

export default function QrCodeGenerator() {
  const [url, setUrl] = useState("");
  const [qrCodeData, setQrCodeData] = useState("");

  const handleInputChange = (event) => {
    setUrl(event.target.value);
  };

  const generateQrCode = () => {
    if (!url) {
      alert("Entrez une adresse URL valide.");
      return;
    }
    setQrCodeData(url);
  };

  return (
    <>
      <img src={logo} alt="Logo mcr" height={150} />
      <div className="input">
        <input
          type="text"
          value={url}
          onChange={handleInputChange}
          placeholder="www.exemple.com"
        />
        <button onClick={generateQrCode}>Générer un QR Code</button>
      </div>
      <div className="qrcode">
        {qrCodeData && <QRCode value={qrCodeData} size={300} level="H" />}
      </div>
      <div className="footer">
        <p>
          Générateur de QR Code par{" "}
          <a href="https://github.com/gitmcr" target="_blank">
            mcr
          </a>
        </p>
      </div>
    </>
  );
}
