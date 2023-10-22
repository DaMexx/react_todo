import style from'./App.module.css'
import ToDoList from './ToDoList/index.jsx'
const App = () => {
  return (
    <>
      <p className={style['title']}>TODO List</p>
      <ToDoList />
    </>
  )
}

export default App
