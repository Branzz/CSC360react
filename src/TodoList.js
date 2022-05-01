import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos = [], setTodos, user }) {
    function setPost(index, todo) {
        const updatedTodos = [...todos]
        updatedTodos[index] = todo
        setTodos(updatedTodos)
    }
    return (
        <div>
            {todos.filter((todo) => todo.user === user)
                .map((p, i) => (
                    <Todo {...p} key={"todo-" + i} id={i} updateTodo={setPost}/>
                ))}
        </div>
    );
}
