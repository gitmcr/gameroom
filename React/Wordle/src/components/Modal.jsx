/* eslint-disable react/prop-types */
export default function Modal({ isCorrect, solution, turn }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p className="solution">{solution}</p>
          <p>Tu as trouvé le mot avec {turn} essais !</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Dommage...</h1>
          <p className="solution">{solution}</p>
          <p>Tu auras plus de chance pour la prochaine partie !</p>
        </div>
      )}
    </div>
  );
}
