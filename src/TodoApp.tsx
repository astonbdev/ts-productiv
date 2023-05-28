import {useReducer} from 'react'
import EditableTodoList from './EditableTodoList';
import TodoForm from './TodoForm'
import {v4 as uuid} from 'uuid'

const DEFAULT_TODOS: ITodo[] = [
    {
      id: "1",
      title: "Code!",
      description: "Write some code",
      priority: 2,
    },
    {
      id: "2",
      title: "Make dinner",
      description: "Cook something healthy",
      priority: 1,
    },
    {
      id: "3",
      title: "Go to bed",
      description: "In bed by 11:15",
      priority: 3,
    },
  ]

  /** 
   * Dispatch function for todo state. Has 3 actions:
   *    CREATE - Adds a todo to reducer state
   *    UPDATE - modifies targeted todo attached to payload
   *    REMOVE - deletes the targeted todo from reducer stated
   * 
   * @param state - [{id, title, string, description}, ...]
   * @param action - { payload: todo, type: "REMOVE", "CREATE", "UPDATE"}
   * @returns [{id, title, string, description}, ...]
   */
function todoReducer(state: ITodo[], action:ITodoAction): ITodo[] {
    switch(action.type){
        case "UPDATE":
            return state.map(function(todo){
                   console.log("todo.id", todo.id, "payload.id", action.payload.id);
                   const newTodo =  (todo.id === action.payload.id 
                    ? {...action.payload}
                    : todo)
                    return newTodo;
                }
            );

        case "CREATE":
            return [...state, {...action.payload, id: uuid()}];

        case "REMOVE":
            return state.filter((todo)=>(
                todo.id !== action.payload.id
            ));

        default: return state;
    }
}

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 * - quote: inspirational quote object with text and author
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({initialTodos = DEFAULT_TODOS}){
    const [todos, dispatch] = useReducer(todoReducer, initialTodos);

    function handleSave(formData: ITodo){
      const action = {
        type: "CREATE",
        payload: {...formData},
    }
    
    dispatch(action)
    }

    return(
        <main className="TodoApp">
        <div className="row">
          <div className="col-md-6">
            <h3 className="mb-3">Todos</h3>
            {todos.length > 0
                ? <EditableTodoList
                    todos={todos}
                    dispatch={dispatch}/>
                : <span className="text-muted">You have no todos.</span>}
          </div>

          <div className="col-md-6">
            {/* CODE FOR TOP TODO */}
            {/* {todos.length > 0 && (
                <section className="mb-4">
                  <h3 className="mb-3">Top Todo</h3>
                  <TopTodo todos={todos} />
                </section>
            )} */}
            <section>
              <h3 className="mb-3">Add Nü</h3>
              <TodoForm handleSave={handleSave} action={"CREATE"} />
            </section>
          </div>

        </div>
      </main>
    );
}

export default TodoApp;