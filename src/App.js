import {useState} from "react";
import TodoItem from "./TodoItem";

const App = ()=> {
    const [todos, setTodos] = useState(todosArray)
    const [add, setAdd]=useState('')

    const handleChange = (data) => {
        setTodos(todos.map(el => el.id === data.id ? data : el))
    }

    console.log(todos)
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const handleAdd=()=> {
        const newTodo = {
            id: todos.length + 1,
            title:add,
            completed: false
        }
        setTodos([...todos, newTodo]);
            setAdd("");
    }

    const handleEditTodo=(data)=> {
        setTodos(todos.map(el=>el.id===data.id?data:el))
    }
    return (
        <div className={'card'}>
            <div className={'card-wrapper'}>
                <h1>Todo App</h1>
                <div className={'add'}>
                    <input className={'add-input'} onChange={(e )=> setAdd(e.target.value)} type="text"/>
                </div>
                <div className={'btn-add-wrapper'}>
                    <button className={'btn-add'} onClick={handleAdd}>Add</button>
                </div>

                {
                    todos.map((todo, idx) =>
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            deleteTodo={deleteTodo}
                            handleEditTodo={handleEditTodo}
                            handleChange={handleChange}
                        />
                    )
                }

            </div>
        </div>
    )
}

export default App;

const todosArray = [
    {
        id:1,
        title:'Todo 1',
        completed:true
    },
    {
        id:2,
        title:'Todo 2',
        completed:false
    }
]