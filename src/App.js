import React, {useReducer, useEffect} from "react";
import StateContext from "./Context";
import appReducer from "./reducers";
import UserBar from "./UserBar";
import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";

function App() {

    const [state, dispatch] = useReducer(appReducer, {user: '', todos: []}, null)

    useEffect(() => {
            console.log('user effect')
            document.title = `${state.user ? (state.user + "'s") : "My"} Blog`
        }, [state.user]
    )

    useEffect(() => {
            console.log('post effect')
        }, [state.todos]
    )

    return (
        <StateContext.Provider value={ {state, dispatch} }>
        <div>
            <h1>Welcome</h1>
            <UserBar/>
            <CreateTodo/>
            <TodoList/>
        </div>
        </StateContext.Provider>
    );
}

export default App;
