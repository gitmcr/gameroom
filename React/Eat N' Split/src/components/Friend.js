import Button from './Button';

export default function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? 'selected' : ''}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          Tu doîs {Math.abs(friend.balance)}€ à {friend.name}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} te doît {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance === 0 && (
        <p className="">Toi et {friend.name} sont quittes</p>
      )}
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? 'Fermer' : 'Sélectionner'}
      </Button>
    </li>
  );
}
