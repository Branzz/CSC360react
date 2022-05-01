import React, { useState } from "react";
import UserBar from "./UserBar";
import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";

function App() {
    const [user, setUser] = useState("");
    const [todos, setTodos] = useState([])
    return (
        <div>
            <h1>Welcome</h1>
            <UserBar user={user} setUser={setUser} />
            {user && <CreateTodo todos={todos} setTodos={setTodos} user={user} />}
            {user && <TodoList todos={todos} setTodos={setTodos} user={user} />}
        </div>
    );
}

export default App;
