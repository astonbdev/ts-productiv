import EditableTodo from "./EditableTodo"

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - dispatch: reducer fn to handle add/remove/update
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({todos, dispatch}: EditableTodoListProps){
    return(
        <>
        {todos.map((todo) => (
            <EditableTodo 
            key={todo.id}
            todo={todo} 
            dispatch={dispatch} />
        ))}
        </>
    )
}

export default EditableTodoList;