import { useState } from "react";
import Header from "./Header";
import ToDoList from "./ToDoList";
import AddToDoForm from "./AddToDoForm";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [todos, setTodos] = useState([]);

  //Add a ToDo
  const onAddTodo = (todo) => {
    const id = Math.random();
    const newToDo = { ...todo, id };
    setTodos([...todos, newToDo]);
  };

  //Delete a ToDo
  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //Toggle Important
  const onToggleImportant = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, important: !todo.important } : todo
      )
    );
  };

  //Toggle shoe/hide form
  const onShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="container">
      <Header onShowForm={onShowForm} showForm={showForm} />
      {showForm && <AddToDoForm onAddTodo={onAddTodo} />}
      {todos.length > 0 ? (
        <ToDoList
          todos={todos}
          onDelete={onDelete}
          onToggleImportant={onToggleImportant}
          important={todos.important}
        />
      ) : (
        "No ToDo to Show, Kindly Add ToDo!"
      )}
    </div>
  );
}

export default App;
