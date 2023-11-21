import {useState} from "react";

const TodoItem = ({todo, deleteTodo, handleEditTodo, handleChange}) => {
    const [edit, setEdit] = useState(false)
    const [editTitle, setEditTitle] = useState(todo.title)

    const handleCheck = (e) => {
        const newData = {
            ...todo, completed: e.target.checked
        }
        handleChange(newData)
    }
    const handleEdit = () => {
        if (!edit) {
            setEdit(!edit)
        } else {
            const newData = {...todo, title: editTitle}
            handleEditTodo(newData)
            setEdit(false)
        }
    }
    return (
        <div className={'todo-list'}
        >
            <div className={'editTodo'}>
                {
                    edit ?
                        <input defaultValue={todo.title} type="text" onChange={(e =>setEditTitle(e.target.value))}/>
                        :
                        <h3>{todo.title}</h3>
                }
            </div>
            <div style={{display:'flex', justifyContent:'flex-end', gap:'10px'}}>
                <input onChange={handleCheck} type="checkbox" checked={todo.completed}/>
                <button className={'btn-update'} onClick={handleEdit}>{edit ? 'Save' : 'Edit'}</button>
                <button className={'btn'} onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem;