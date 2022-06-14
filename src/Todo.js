import React from "react";
import {Link} from 'react-navi'

export default function Todo({ title, user, description, dateCreated, dateComplete, complete, id, dispatch }) {
    function addTodo(e) {
        dispatch({type: "COMPLETE_TODO", title, user, description, dateCreated, dateComplete, id, complete: e.target.checked});
    }
    return (
        <div>
            <Link href={`/post/${id}`}><h3>{title}</h3></Link>            <div>Created: {dateCreated}</div>
            <div>{description}</div>
            <div>
                <input type="checkbox" defaultChecked={complete} value={complete} onChange={addTodo}/>
            </div>
            {complete && <div>Completed on: {dateComplete}</div>}
        </div>
    );
}
