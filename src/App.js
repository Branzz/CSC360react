import React, { useState, useReducer, useEffect, createContext } from "react";
import UserBar from "./UserBar";
import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";
import appReducer from "./reducers";

function App() {

    // useEffect(() => {
    //     fetch('/api/todos')
    //         .then(result => result.json())
    //         .then(todos => dispatch({ type: 'FETCH_POSTS', todos }))
    // }, [])

    //const [user, setUser] = useState("");
    // const [todos, setTodos] = useState([]);
    const [state, dispatch] = useReducer(appReducer, {user: '', todos: []}, )

    return (
        <div>
            <h1>Welcome</h1>
            <UserBar user={state.user} dispatch={dispatch} />
            {state.user && <CreateTodo todos={state.todos} dispatch={dispatch} user={state.user} />}
            {state.user && <TodoList todos={state.todos} dispatch={dispatch} user={state.user} />}
        </div>
    );
}

export default App;
