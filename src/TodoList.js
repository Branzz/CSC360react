import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos = [], dispatch, user }) {
    return (
        <div>
            {todos
                // .filter((todo) => todo.user === user) // action.user to view others' todos
                .map(p => <Todo {...p} key={"post-" + p.id} dispatch={dispatch}/>)}
        </div>
    );
}
