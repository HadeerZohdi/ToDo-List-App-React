import Button from "./Button";

const Header = ({ onShowForm, showForm }) => {
  return (
    <header>
      <h1>ToDo List</h1>
      <Button
        onShowForm={onShowForm}
        text={showForm ? "Close" : "Add ToDo"}
        color={showForm ? "red" : "green"}
      />
    </header>
  );
};

export default Header;
