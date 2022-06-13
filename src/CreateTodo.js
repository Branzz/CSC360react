import React, { useState } from "react";

export default function CreateTodo({ dispatch, user }) {
    const [title, setTitle] = useState("");
    function handleTitle(evt) {
        setTitle(evt.target.value)
    }
    const [description, setDescription] = useState("");
    function handleDescription(evt) {
        setDescription(evt.target.value)
    }
    function addTodo() {
        dispatch({type: "ADD_TODO", author: user, title, description, dateComplete: undefined})
    }
    return (
        <form onSubmit={(e) => { e.preventDefault(); addTodo(); }}>
            <div>
                <label htmlFor="create-title">Title:</label>
                <input type="text" name="create-title" value={title} id="create-title" onChange={handleTitle}/>
            </div>
            <div>
                <label htmlFor="create-description">Description:</label>
                <input type="text" name="create-description" value={description} id="create-description" onChange={handleDescription}/>
            </div>
            <input type="submit" value="Create" />
        </form>
    );
}
