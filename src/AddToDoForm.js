import { useState } from "react";

const AddToDoForm = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [important, setImportant] = useState(false);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const importantChangeHandler = () => {
    setImportant(!important);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!title) {
      alert("Please enter a ToDo");
      return;
    }
    onAddTodo({ title, date, important });
    setTitle("");
    setDate("");
    setImportant(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>ToDo Title</label>
        <input
          type="text"
          placeholder="Add a ToDo Title"
          value={title}
          onChange={titleChangeHandler}
        />
      </div>
      <div className="form-control">
        <label>ToDo Date</label>
        <input
          type="text"
          placeholder="Add a ToDo Date"
          value={date}
          onChange={dateChangeHandler}
        />
      </div>
      <div className="important-ceckbox">
        <label>
          Important?
          <input
            type="checkbox"
            checked={important}
            onChange={importantChangeHandler}
          />
        </label>
        <p>Double Click the ToDo to set to Important</p>
      </div>

      <input type="submit" value="Save ToDo" className="btn btn-black" />
    </form>
  );
};

export default AddToDoForm;
