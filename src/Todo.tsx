
/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority }
 *
 * { EditableTodo, TopTodo } -> Todo
 **/

function Todo({title, description, priority}: TodoProps){
    return(
        <div className="Todo">
            <div><b>{title}</b> <small>(priority: {priority})</small></div>
            <div><small>{description}</small></div>
        </div>
    )
}

export default Todo;
