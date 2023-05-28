interface ITodo {
    id: string,
    title: string,
    description: string,
    priority: number
}

interface ITodoAction {
    type: string,
    payload: ITodo,
}

interface ITodoFormData {
    title: string,
    description: string,
    priority: number
}

type TodoDispatch = Dispatch<ITodoAction>

type TodoInputElements = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;


type TodoAppProps = { initialTodos: ITodo[] }
type EditableTodoProps = { todo: ITodo, dispatch: TodoDispatch }
type EditableTodoListProps = { todos: ITodo[], dispatch: TodoDispatch }
type TodoProps = { title: string, description: string, priority: number }
type TodoFormProps = { initialFormData?: ITodoFormData, handleSave: TodoDispatch, action: string }
