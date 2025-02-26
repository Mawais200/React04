import { useState } from "react";

export default function Todo() {
    let [Todo, setTodo] = useState([]);
    let [newTodo, setnewTodo] = useState("");

    let AddnewTask = () => {
        if (newTodo.trim() === "") return; // Prevent empty tasks
        setTodo([...Todo, newTodo]);
        setnewTodo(""); // Clear input field after adding
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-2xl shadow-xl w-96">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-4"> Todo List</h2>

                <div className="flex">
                    <input
                        className="flex-1 p-2 border rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={newTodo}
                        onChange={(e) => setnewTodo(e.target.value)}
                        placeholder="Add a new task..."
                    />
                    <button
                        onClick={AddnewTask}
                        className="bg-blue-500 text-white px-4 py-2 rounded-r-xl hover:bg-blue-600 transition text-[20px]"
                    >
                    +
                    </button>
                </div>

                <hr className="my-4" />

                <h4 className="text-lg font-semibold text-gray-700">Your Tasks:</h4>
                <ul className="mt-2 space-y-2">
                    {Todo.map((task, index) => (
                        <li
                            key={index}
                            className="p-2 bg-gray-200 rounded-lg shadow-sm text-gray-800"
                        >
                            {task}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
