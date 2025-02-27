import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaTrash, FaArrowUp } from "react-icons/fa";

export default function Todo() {
    let [Todo, setTodo] = useState([]);
    let [newTodo, setnewTodo] = useState("");

    let AddnewTask = () => {
        if (newTodo.trim() === "") return;
        setTodo([...Todo, newTodo]);
        setnewTodo("");
    };

    let deleteTask = (index) => {
        setTodo(Todo.filter((_, i) => i !== index));
    };

    let UperCase = () => {
        setTodo(Todo.map(task => task.toUpperCase()));
    };

    let clearAll = () => {
        setTodo([]);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 p-6">
            <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-4"> Todo List</h2>
                <div className="flex mb-4">
                    <input
                        className="flex-1 p-3 border rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                        value={newTodo}
                        onChange={(e) => setnewTodo(e.target.value)}
                        placeholder="Add a new task..."
                    />
                    <button
                        onClick={AddnewTask}
                        className="bg-blue-500 text-white px-4 py-3 rounded-r-xl hover:bg-blue-600 transition shadow-md text-xl"
                    >
                        <FaPlus />
                    </button>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={UperCase}
                        className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition shadow-md flex-1 flex items-center justify-center gap-2"
                    >
                        <FaArrowUp /> Uppercase
                    </button>
                    <button
                        onClick={clearAll}
                        className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition shadow-md flex-1"
                    >
                        Clear All
                    </button>
                </div>
                <hr className="my-4" />
                <h4 className="text-lg font-semibold text-gray-700">Your Tasks:</h4>
                <ul className="mt-3 space-y-3">
                    {Todo.map((task, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="p-3 bg-gray-100 rounded-lg shadow-md text-gray-800 flex justify-between items-center hover:bg-gray-200 transition cursor-pointer"
                        >
                            {task}
                            <button
                                onClick={() => deleteTask(index)}
                                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                            >
                                <FaTrash />
                            </button>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
