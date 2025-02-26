import { useState } from "react"

export default function LudoFunc(){
    let [Moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
    let updatebtn = ()=>{
        setMoves({...Moves,blue:Moves.blue+1})
    }

    return(

        <div className="flex justify-center w-full mt-[150px]">
        <div className="text-center">
        <p className="font-bold text-[24px]">Game Begins!</p>
        <div className="Board font-sans">
            <p className="font-medium text-[20px] py-[10px]">Blue Moves = {Moves.blue}</p>
            <button className="bg-amber-300 text-black p-[5px_20px] font-sans rounded-[5px]" onClick={updatebtn}> +1</button>
            <p  className="font-medium text-[20px] py-[10px]">Yellow Moves {Moves.yellow}</p>
            <button className="bg-amber-300 text-black p-[5px_20px] font-sans rounded-[5px]" onClick={() => setMoves({...Moves, yellow: Moves.yellow + 1})}> +1</button>
            <p   className="font-medium text-[20px] py-[10px]">Green Moves {Moves.green}</p>
            <button className="bg-amber-300 text-black p-[5px_20px] font-sans rounded-[5px]" onClick={() => setMoves({...Moves, green: Moves.green + 1})}> +1</button>
            <p   className="font-medium text-[20px] py-[10px]">Red Moves {Moves.red}</p>
            <button className="bg-amber-300 text-black p-[5px_20px] font-sans rounded-[5px]" onClick={() => setMoves({...Moves, red: Moves.red + 1})} > +1</button>
            
            

        </div>
        </div>
        </div>
    )
}