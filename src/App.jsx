import {useState} from 'react';
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';
import { WINNING_COMBINATIONS } from './components/winning-combinations.js';
import GameOver from './components/GameOver.jsx';


const PLAYERS={
  X:'player1',
  O:'player2'

};
//this is 3*3 column store the grid and null means there is no value inside the box
const initalGameBoard=[
  [null, null, null],
  [null, null, null],
  [null, null, null],
  ];


  function getActivePlayer(gameTurns){
   
    let curPlayer='X';//current player is x
    // if last turn is x then laster player is 0 other than next player is x
    if(gameTurns.length>0 && gameTurns[0].player==='X'){
    curPlayer='O';
    }
    return curPlayer;
  }
   function deriveWinner(gameBoard,players){
      //winning condition => if any there box one of the box is x ans o the  it is  winner.

    let winner;
    for(const combination of WINNING_COMBINATIONS){
      const firstSquareSymbol=gameBoard[combination[0].row][combination[0].column];
      const SecondSquareSymbol=gameBoard[combination[1].row][combination[1].column];
      const ThirdSquareSymbol=gameBoard[combination[2].row][combination[2].column];
      
      if(firstSquareSymbol 
        && firstSquareSymbol===SecondSquareSymbol 
        && firstSquareSymbol===ThirdSquareSymbol)
        {
  winner=players[firstSquareSymbol];
        }
   
    }
     return winner;
   }
    function deriveGameBoard(gameTurns){
       //gameBoard is a copy that's why you not update the initalgameBoard value 
  let gameBoard= [...initalGameBoard.map(array=>[...array])];
  //gameTiurns save the value of gameBoard
    for(const turn of gameTurns){
      const{square,player}=turn;
      const{row,col}=square;
      gameBoard[row][col]=player;
    }
     return gameBoard;
    }
  function App() {
    const [players,setPlayers]=useState({
      'X': 'Player 1',
      'O': 'player 2'

    });
    //gameTurns=>store the turns 
    //setgameTurns=>update the game turns
  const[gameTurns,setGameTurns]=useState([]);
  // const[activePlayer,setActivePlayer]=useState('X');
  const activePlayer=getActivePlayer(gameTurns);
 const gameBoard=deriveGameBoard(gameTurns);
const winner=deriveWinner(gameBoard,players);
  
  // draw condition=>check there is no vacant place in box and ensure that ther is no winner 
const hasDraw= gameTurns.length===9 && !winner;
 
 // select the squre=> firstly check there is any wnner or not 
 //check previous select box not play
 // through gameTurns new turn state save  
  function handleSelectSquare(rowIndex,colIndex){
    

    // setActivePlayer((curActive)=>curActive==='X'?'O':'X');
  
  
  
    setGameTurns(prevTurns=>{
    const curPlayer=getActivePlayer(prevTurns);
    const updatedTurns=[
      {square:{row:rowIndex,col:colIndex},player:curPlayer },
      ...prevTurns,];
      return updatedTurns;
  });

  }
    // restart the game 
  function handleRestart(){
    setGameTurns([]);
  }
  function handleChangeName(symbol,newName){
setPlayers(prevPlayers =>{


  return{
    ...prevPlayers,
    [symbol]:newName
  }
  });
  }
  return (
<main>
    <div id="game-container">

      <ol id="players"className='highlight-player'>
        <Player 
        initalName={PLAYERS.X} 
        symbol="X" 
        isActive={activePlayer==='X'} 
        onChangeName={handleChangeName}/>
        <Player
         initalName={PLAYERS.O}
         symbol="O" 
        isActive={activePlayer==='O'}
        onChangeName={handleChangeName}/>
      </ol>
      {(winner || hasDraw)&& <GameOver winner={winner} onRestart={handleRestart}/>}
    <GameBoard onSelectSquare={handleSelectSquare} 
  board={gameBoard}
    />
    </div>
   
  <Log turns={gameTurns}/>
  </main>

  )
};

export default App;
