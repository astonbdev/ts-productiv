import EditableTodo from "./EditableTodo"

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({todos, dispatch}: EditableTodoListProps){
    return(
        <>
        {todos.map((todo) => (
            <EditableTodo todo={todo} dispatch={dispatch} />
        ))}
        </>
    )
}

export default EditableTodoList;