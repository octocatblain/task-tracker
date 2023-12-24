import "./CSS/TodoItems.css";

const Todoitems = ({ no, display, text, setTodos }) => {
  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        } else {
          data[i].display = "";
        }
        break;
      }
    }

    setTodos(data);
  };

  return (
    <div className="todoitems">
      <div
        className={`todoitems-container ${display}`}
        onClick={() => {
          toggle(no);
        }}
      >
        {display === "" ? <p>🟢</p> : <p>🟠</p>}
        <div className="todoitems-text">{text} </div>
      </div>
      <p className="cross-icon">❌</p>
    </div>
  );
};

export default Todoitems;
