import style from "./App.module.css";
import ToDoList from "./ToDoList/ToDoList.jsx";
import TestComponent from "./TestComponent.jsx";
const App = () => {
  return (
    <>
      <p className={style["title"]}>TODO List</p>
      <TestComponent />
      <ToDoList />
    </>
  );
};

export default App;
