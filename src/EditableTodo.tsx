import Todo from "./Todo"
import {useState} from 'react'
import TodoForm from './TodoForm'

/** Show editable todo item.
 *
 * Props
 * - todo
 * - dispatch: fn to call to change a todo:
 *      action: REMOVE, CREATE, UPDATE
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({todo, dispatch}: EditableTodoProps){
  const [isEditing, setIsEditing] = useState(false);

  /** Toggle if this is being edited */
  function toggleEdit() {
    setIsEditing(edit => !edit);
  }

  /**
   * Removes the current todo from the todos state
   */
  function handleDelete(){
    const action = {
        type: "REMOVE",
        payload: todo,
    }

    dispatch(action)
  }

  /** updates the current todo */
  function handleSave(formData:ITodo){
    const action = {
        type: "UPDATE",
        payload: {...formData, id: todo.id},
    }

    dispatch(action)
    toggleEdit()
  }

    return(
        <div className="EditableTodo">
            {isEditing
            ? <TodoForm 
                initialFormData={todo} 
                handleSave={handleSave} 
                action={"UPDATE"}/>
            :   <div className="mb-3">
                    <div className="float-end text-sm-end">
                    <button
                        className="EditableTodo-toggle btn-link btn btn-sm"
                        onClick={toggleEdit}>
                        Edit
                    </button>
                    <button
                        className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
                        onClick={(handleDelete)}>
                        Del
                    </button>
                    </div>
                        <Todo 
                            title={todo.title} 
                            description={todo.description} 
                            priority={todo.priority}
                        />
                </div>
            
            }
        </div>
    )
}

export default EditableTodo;