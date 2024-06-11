import React, {useState , useEffect} from 'react';
//import "./TicTacToe.css";


const TicTacToe = () => {
    
    const[chart,setChart] = useState(Array(9).fill(""))
    const[pointer,setPointer] = useState('X')
    const[winner,setWinner] = useState('null') 
    
    
    const click=(n)=> {
        if (winner||chart[n]!=="") {
            alert ('we get an winner or already clicked');
            return;
        }


        let updateChart = [...chart]
        updateChart[n] = pointer;
        setChart(updateChart);
        setPointer(pointer === 'X' ? 'O' : 'X');
        checkWinner(updateChart); 

    }

    const checkWinner = (currentChart) => {
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for (let i=0; i<lines.length; i++){
            const [a,b,c]=lines[i];
            if(currentChart[a] && currentChart[a] === currentChart[b] && currentChart[a] === currentChart[c]){
                setWinner(currentChart[a]);
                return;
            }
    
        }
        if (currentChart.every(cell => cell !== "")) {
            setWinner('Draw');
        }
            
    }
    const reset = () => {
        setChart(Array(9).fill(""));
        setWinner(null);
        setPointer('X');
    }

    useEffect (() => {
        if(winner){
            setTimeout(reset,3000);
        }
    }, [winner] );

  
  
  
    return (
        // Container with Tailwind classes
        <div className="mx-auto max-w-screen-md mt-4 px-5 py-5 bg-gradient-to-br  from-rose-500 to-teal-500 rounded-lg shadow-lg">
          {/* Heading with Tailwind classes */}
          <h1 className="text-5xl text-stone-300 text-center mb-8">Tic Tac Toe in <span className="text-yellow-400">React</span></h1>
          
          {/* Grid container with Tailwind classes */}
          <div className="grid grid-cols-3 gap-2 bg-gradient-to-br  from-yellow-400 to-purple-500 rounded-lg shadow-inner">
            {chart.map((value, index) => (
              <div 
                key={index} 
                // Cell (box) with Tailwind classes
                className="w-24 h-24 flex items-center justify-center text-3xl font-bold text-gray-900 border border-gray-800 cursor-pointer hover:bg-gray-200 transition-colors"
                onClick={() => click(index)}
              >
                {value}
              </div>
            ))}
          </div>
          
          {/* Status message with Tailwind classes */}
          <div className="text-center text-2xl text-white mt-4">
            {winner ? (winner === 'Draw' ? "It's a draw!" : `Winner: ${winner}`) : `Next player: ${pointer}`}
          </div>
          
          {/* Reset button with Tailwind classes */}
          <div className="text-center mt-4">
            <button 
              className="bg-yellow-400 text-white px-4 py-2 rounded-full shadow-md hover:bg-yellow-500 transition-colors"
              onClick={reset}
            >
              Reset
            </button>
          </div>
        </div>
      );
    };
    
    export default TicTacToe;