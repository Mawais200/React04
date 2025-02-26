import { useState } from "react";
import { motion } from "framer-motion";


export default function LudoFunc() {
  const [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
  

  const updateMoves = (color, value) => {
    setMoves((prev) => ({ ...prev, [color]: Math.max(0, prev[color] + value) }));
    
  };

  return (
    <div className="flex justify-center w-full mt-24">
      <motion.div
        className="text-center w-[400px] bg-blue-200 p-6 rounded-2xl shadow-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-bold text-2xl">🎲 Ludo Game Begins! 🎲</p>
        <div className="mt-4 space-y-4">
          {Object.entries(moves).map(([color, value]) => (
            <div key={color}>
              <p className="font-semibold capitalize"> Moves: {value}</p>
              <div className="flex gap-2 justify-center">
                <motion.button 
                  className="px-4 py-2 rounded-md text-white bg-blue-900 hover:bg-black "
                  whileTap={{ scale: 0.9 }}
                  onClick={() => updateMoves(color, 1)}
                >
                  +1
                </motion.button>
                <motion.button 
                  className={`px-4 py-2 rounded-md text-white bg-blue-900 hover:bg-black`}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => updateMoves(color, -1)}
                >
                  -1
                </motion.button>
              </div>
            </div>
          ))}
        </div>
        <motion.button
          className="mt-6 px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
          whileTap={{ scale: 0.9 }}
          onClick={() => setMoves({ blue: 0, yellow: 0, green: 0, red: 0 })}
        >
          🔄 Reset Moves
        </motion.button>
      </motion.div>
    </div>
  );
}
