const Button = ({ text, color, onShowForm }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={onShowForm}
    >
      {text}
    </button>
  );
};

export default Button;
