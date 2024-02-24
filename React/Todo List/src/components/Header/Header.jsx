import { useState } from "react";

import "./Header.css";

export default function Header({ logo, onAddItem }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (value.length > 0) {
      onAddItem(value);
      setValue("");
    } else {
      alert("Vous n'avez rien saisi");
    }
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="header">
      <img src={logo} alt="logo" width={50} />
      <form onSubmit={handleSubmit}>
        <input type="text" id="item" onInput={handleChange} value={value} />
      </form>
    </div>
  );
}
