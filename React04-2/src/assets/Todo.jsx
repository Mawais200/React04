import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaTrash, FaArrowUp } from "react-icons/fa";

export default function Todo() {
    let [todo, setTodo] = useState([]);
    let [newTodo, setNewTodo] = useState("");

    let AddnewTask = () => {
        if (newTodo.trim() === "") return;
        setTodo([...todo, newTodo]);
        setNewTodo("");
    };

    let Markdone = (index) => {
        setTodo(todo.map((task, i) =>
            i === index && !task.includes("-Done") ? `${task} - Done` : task
        ));
    };

    let deleteTask = (index) => {
        setTodo(todo.filter((_, i) => i !== index));
    };

    let UperCase = () => {
        setTodo(todo.map(task => task.toUpperCase()));
    };

    let clearAll = () => {
        setTodo([]);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 p-6">
            <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Todo List</h2>
                
                {/* Input & Add Task Button */}
                <div className="flex mb-4">
                    <input
                        className="flex-1 p-3 border rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        placeholder="Add a new task..."
                    />
                    <button
                        onClick={AddnewTask}
                        className="bg-blue-500 text-white px-4 py-3 rounded-r-xl hover:bg-blue-600 transition shadow-md text-xl"
                    >
                        <FaPlus />
                    </button>
                </div>

                {/* Control Buttons */}
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

                {/* Task List */}
                <h4 className="text-lg font-semibold text-gray-700">Your Tasks:</h4>
                <ul className="mt-3 space-y-3">
                    {todo.map((task, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="p-3 bg-gray-100 rounded-lg shadow-md text-gray-800 flex justify-between items-center hover:bg-gray-200 transition cursor-pointer"
                        >
                            <span className={task.includes("- Done") ? "line-through text-gray-500" : ""}>
                                {task}
                            </span>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => Markdone(index)}
                                    className="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition"
                                >
                                    ✅ Done
                                </button>
                                <button
                                    onClick={() => deleteTask(index)}
                                    className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition"
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
