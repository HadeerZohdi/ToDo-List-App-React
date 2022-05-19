import { FaTimes } from 'react-icons/fa'

const ToDo = ({ todos, onDelete, onToggleImportant, important }) => {
    return   (
        <>
        {todos.map((todo) => (
            <div key={todo.id} className={`todo ${todo.important ? 'important' : ''}`} onDoubleClick={() => onToggleImportant(todo.id)}>
                <h4>{todo.title} <FaTimes style={{color: 'red'}} onClick={() => onDelete(todo.id)} /> </h4>
                <p>{todo.date}</p>
            </div>
        ))}
        </>
    )
}

export default ToDo;
