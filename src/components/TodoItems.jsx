import "./CSS/TodoItems.css";

const Todoitems = ({ no, display, text }) => {
  return (
    <div className="todoitems">
      <div className="todoitems-container">
        <p>🟢</p>
        <p>🟠</p>
        <div className="todoitems-text">{text} </div>
      </div>
      <p>❌</p>
    </div>
  );
};

export default Todoitems;
