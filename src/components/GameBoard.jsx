

export default function GameBoard({onSelectSquare,board}){
 
  //  const[gameBoard,setGameBoard]= useState(initalGameBoard);
  //  function handleSelectSquare(rowIndex,colIndex){
  //   setGameBoard((prevGameBoard)=>{
  //     const  updatedGameBoard=[...prevGameBoard.map(innerArray=>[...innerArray])];
  //       updatedGameBoard[rowIndex][colIndex]=activePlayerSymbol;
  //       return updatedGameBoard;
  //   });
  //   onSelectSquare();
  //  }

    return(
    <ol id="game-board">
{board.map((row,rowIndex)=>
(
<li key={rowIndex}>
<ol>
        {row.map((playerSymbol,colIndex)=>(
<li key={colIndex}>
 
<button onClick={()=>onSelectSquare(rowIndex,colIndex)
} disabled={playerSymbol!== null}>
  {playerSymbol}</button>
</li>
))}
</ol>
</li>
))}

    </ol>
    );
    
}
// import React, { useState } from "react";

// const initialGameBoard = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];

// export default function GameBoard() {
//   const [gameBoard, setGameBoard] = useState(initialGameBoard);

//   // Function to handle the square selection
//   function handleSelectSquare(rowIndex, colIndex) {
//     setGameBoard((prevGameBoard) => {
//       const updatedGameBoard = prevGameBoard.map((row, rIdx) =>
//         row.map((cell, cIdx) =>
//           rIdx === rowIndex && cIdx === colIndex ? "x" : cell
//         )
//       );
//       return updatedGameBoard;
//     });
//   }

//   return (
//     <ol id="game-board">
//       {gameBoard.map((row, rowIndex) => (
//         <li key={rowIndex}>
//           <ol>
//             {row.map((playerSymbol, colIndex) => (
//               <li key={colIndex}>
//                 <button
//                   onClick={() => handleSelectSquare(rowIndex, colIndex)}
//                 >
//                   {playerSymbol || " "}
//                 </button>
//               </li>
//             ))}
//           </ol>
//         </li>
//       ))}
//     </ol>
//   );
// }
