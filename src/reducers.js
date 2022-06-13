import DateUtil from "./DateUtil";

function userReducer(state, action) {
    switch (action.type) {
        case "LOGIN":
        case "REGISTER":
            return action.username;
        case "LOGOUT":
            return "";
        default:
            return state;
    }
}

function todoReducer(state, action) {
    switch(action.type) {
        case "ADD_TODO":
            let newVar = {
                title: action.title,
                description: action.description,
                author: action.author,
                id: action.id,
                dateCreated: DateUtil.currentDate(),
                dateComplete: action.dateComplete,
                complete: false,
            };
            console.log(newVar)
            let i = 0;
            return [newVar, ...state].map(t => ({...t, id: i++}));
        case 'COMPLETE_TODO': // and uncomplete
            console.log(state)
            return state.map(t =>
                t.id === action.id && t.user === action.user ?
                    {
                        title: action.title,
                        description: action.description,
                        author: action.author,
                        id: action.id,
                        dateCreated: action.dateCreated,
                        dateComplete: DateUtil.currentDate(),
                        complete: action.complete,
                    }
                    : t
            );
        case 'FETCH_TODOS':
            return state;
        default:
            return state;
    }
}


export default function appReducer (state, action) {
    return {
        user: userReducer(state.user, action),
        todos: todoReducer(state.todos, action)
    }
}
