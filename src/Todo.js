import React from "react";
import DateUtil from "./DateUtil"

export default function Todo({ title, user, description, dateCreated, dateCompleted, complete, id, updateTodo }) {
    function handleCompleteCheckbox(evt) {
        const newTodo = {
            title,
            user,
            description,
            dateCreated,
            dateCompleted: DateUtil.currentDate(),
            complete: evt.target.checked,
        }
        updateTodo(id, newTodo)
    }
    return (
        <div>
            <h3>{title}</h3>
            <div>Created: {dateCreated}</div>
            <div>{description}</div>
            <div>
                <input type="checkbox" value={complete} onChange={handleCompleteCheckbox}/>
            </div>
            {complete && <div>Completed on: {dateCompleted}</div>}
        </div>
    );
}
