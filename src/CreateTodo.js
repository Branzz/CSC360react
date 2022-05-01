import React, { useState } from "react";
import DateUtil from "./DateUtil";

export default function CreateTodo({ todos, setTodos, user }) {
    const [title, setTitle] = useState("");
    function handleTitle(evt) {
        setTitle(evt.target.value)
    }
    const [description, setDescription] = useState("");
    function handleDescription(evt) {
        setDescription(evt.target.value)
    }
    function addTodo() {
        setTodos([{ title, user, description, dateCreated: DateUtil.currentDate(), complete:false }, ...todos])
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
