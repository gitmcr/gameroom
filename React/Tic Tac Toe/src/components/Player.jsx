import { useState } from 'react';

// Lors de son appel, "Player" attend un "name" et un "symbol"
export default function Player({ initialName, symbol }) {
  // Déclare une variable nommée "playerName" qui contiendra le nom du joueur
  // "initialName" est la valeur initiale attribuée à "playerName"
  // "setPlayerName" est une fonction permettant de mettre à jour la valeur de "playerName"
  const [playerName, setPlayerName] = useState(initialName);
  // Déclare une variable nommée "isEditing" qui indique si le nom du joueur est en cours d'édition
  // "false" est la valeur initiale attribuée à "isEditing"
  // "setIsEditing" est une fonction permettant de mettre à jour la valeur de "isEditing"
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // Donne à "setIsEditing" la valeur inverse de ce qu'il est actuellement, "false" si "true" et inversement
    setIsEditing((editing) => !editing);
  }

  // L'objet "event" contient des informations sur l'événement qui a déclenché la fonction, notamment la valeur saisie par l'utilisateur
  function handleChange(event) {
    // "setPlayerName" contient la valeur saisie par l'utilisateur dans l'élément "input"
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  // Si "isEditing" est "true"
  if (isEditing) {
    // Remplace le "span" par un "input" pour modifier le "name"
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      {/* Lors du clic sur le bouton, exécute "handleEditClick"
       Détermine le texte affiché sur le bouton en fonction de la valeur de la variable "isEditing"
       Si "false", le texte "Edit" s'affichera et inversement */}
      <button onClick={handleEditClick}>{!isEditing ? 'Edit' : 'Save'}</button>
    </li>
  );
}
