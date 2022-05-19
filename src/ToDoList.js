import ToDo from "./Todo";

const ToDoList = ({ todos, onDelete, onToggleImportant, important }) => {
  return (
    <ToDo
      todos={todos}
      onDelete={onDelete}
      onToggleImportant={onToggleImportant}
      important={important}
    />
  );
};

export default ToDoList;
