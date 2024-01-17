import { useCallback, useState } from "react";
import style from "./ToDoList.module.css";
import ToDo from "./components/ToDo";
import CheckedIcon from "./icons/CheckedIcon";

function TestComponent() {
  return (
    <>
      <button onClick={() => console.log("clicked")}>click me</button>
    </>
  );
}
function ToDoList() {
  const [toDoList, setToDoList] = useState([]);
  const [text, setText] = useState("");

  const createToDo = () => {
    if (!text) {
      return;
    }
    const newTodo = {
      id: Date.now(),
      checked: false,
      text: text.trim(),
    };
    setToDoList([...toDoList, newTodo]);
    setText("");
  };

  const setNewText = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      createToDo();
    }
  };

  const handleDeleteToDo = (id) => {
    setToDoList(toDoList.filter((toDo) => toDo.id !== id));
  };

  const handleCheckToDo = useCallback(({id, value}) => {
    setToDoList((toDoList) =>
      toDoList.map((toDo) => {
        if (toDo.id === id) {
          toDo.checked = value;
        }
        return toDo;
      })
    );
  }, []);
  // const handleCheckToDo = (({id, value}) => {
  //   console.log(id);
  //   setToDoList(
  //     toDoList.map((toDo) => {
  //       if (toDo.id === id) {
  //         toDo.checked = value;
  //       }
  //       return toDo;
  //     })
  //   );
  // });

  const checkAllToDo = (e) => {
    const updatedToDoList = toDoList.map((toDo) => ({
      ...toDo,
      checked: e.target.checked,
    }));

    setToDoList(updatedToDoList);
  };

  return (
    <>
      <div className={style["todo-list__input-container"]}>
        <input
          className={style["todo-list__input"]}
          type="text"
          value={text}
          onChange={setNewText}
          onKeyDown={handleKeyDown}
        />
        <button onClick={createToDo}>
          <CheckedIcon />
        </button>
      </div>
      <div className={style["todo-list__all-checked"]}>
        <input type="checkbox" onChange={checkAllToDo} />
        <span>Check all toDoList</span>
      </div>
      <TestComponent />
      <ul className={style["todo-list__container"]}>
        {toDoList.map((todo) => {
          return (
            <ToDo
              text={todo.text}
              checked={todo.checked}
              id={todo.id}
              key={todo.id}
              onDeleteToDo={handleDeleteToDo}
              onCheckToDo={handleCheckToDo}
            />
          );
        })}
      </ul>
    </>
  );
}

export default ToDoList;
