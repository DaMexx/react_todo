import { useState } from 'react'
import './ToDoList.css'
import ToDo from './components/ToDo'
import CheckedIcon from './icons/CheckedIcon'
function ToDoList() {
  const [toDos, setToDos] = useState([])
  const [text, setText] = useState('')
  const createToDo = () => {
    if (!text) {
      return
    }
    const newTodo = {
      id: Date.now(),
      checked: false,
      text: text.trim(),
    }
    setToDos([...toDos, newTodo])
    setText('')
  }
  const toDoList = toDos.map((toDo) => {
    return <ToDo
      text={toDo.text}
      checked={toDo.checked}
      key={toDo.id}
    />
  })
  const setNewText = (e) => {
    setText(e.target.value)
  }

  const handleKeyDown = (event) => {

    if (event.key === 'Enter') {
      createToDo()
    }
  };
  return (
    <>
      <div className="todo-list__input-container">
        <input
          className="todo-list__input"
          type="text"
          value={text}
          onChange={setNewText}
          onKeyDown={handleKeyDown}
        />
        <button onClick={createToDo}>
          <CheckedIcon /> 
        </button>
      </div>
      <ul className='todo-list__container'>
        {toDoList}
      </ul>
    </>
  )
}

export default ToDoList
