import { useState } from "react"
import confetti from "canvas-confetti"
import { Square } from "./components/Square"
import { turns } from "./constants"
import { checkWinner } from "./logic/board"
import { WinnerModal } from "./components/winnerModal"



function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )

  const [turn, setTurn] = useState(turns.X)
  
  const [winner, setWinner] = useState(null)



  const checkEndGame = (newBoard) => {
    return newBoard.every((Square) => Square != null)
  }


  const updateBoard = (index) => {
    if(board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === turns.X ? turns.O  : turns.X
    setTurn(newTurn)
    
    const newWinner = checkWinner(newBoard)
    if(newWinner){    
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  }
   
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(turns.X)
    setWinner(null)
  }

  return (
    <main className="board">  
      <h1>tic tac toe</h1>
       <section className="game">
          {
            board.map((_,  index) => {
              return(
                <Square 
                key={index}
                index={index}
                updateBoard={updateBoard}
                >
                  {board[index]}
                </Square>
              )  
            })
          }
       </section>

       <section className="turn">
        <Square isSelected = { turn === turns.X}> {turns.X}</Square>
        <Square isSelected = { turn === turns.O}> {turns.O}</Square>
       </section> 
       <button onClick={resetGame}>reset game</button>

          <WinnerModal resetGame={resetGame} winner={winner}/>
          
    </main>
    
  )
}

export default App
