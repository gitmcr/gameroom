import Player from './components/Player';
import GameBoard from './components/Gameboard';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          {/* Ici, on appelle "Player" avec un "name" et un "symbol" */}
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
