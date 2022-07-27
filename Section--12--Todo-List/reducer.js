const init = {
    todo: ['eat']
}

export default function reducer(state = init, action, args) {
    switch (action) {
        case 'add':
            const [newTodo] = args;
            return {
                ...state,
                todo: [...state.todo, newTodo]
            }
        default:
            return state
    }
}