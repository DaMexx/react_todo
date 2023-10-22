import { useState } from 'react'
import style from './ToDoList.module.css'
import ToDo from './components/ToDo'
import CheckedIcon from './icons/CheckedIcon'
function ToDoList() {
  const [toDoList, setToDoList] = useState([])
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
    setToDoList([...toDoList, newTodo])
    setText('')
  }

  const setNewText = (e) => {
    setText(e.target.value)
  }

  const handleKeyDown = (event) => {

    if (event.key === 'Enter') {
      createToDo()
    }
  };

  const deleteToDo = (id) => {
    setToDoList(toDoList.filter((toDo) => toDo.id !== id))
  }

  const checkToDo = (id) => {
    setToDoList(toDoList.map((toDo) => {
      if (toDo.id === id) {
        toDo.checked = !toDo.checked
      }
      return toDo
    }))
    console.log(toDoList);
  }

  const checkAllToDo = (e) => {
    const updatedtoDoList = toDoList.map((toDo) => ({
      ...toDo,
      checked: e.target.checked
    }));
  
    setToDoList(updatedtoDoList);
  }

  return (
    <>
      <div className={style['todo-list__input-container']}>
        <input
          className={style['todo-list__input']}
          type="text"
          value={text}
          onChange={setNewText}
          onKeyDown={handleKeyDown}
        />
        <button onClick={createToDo}>
          <CheckedIcon />
        </button>
      </div>
      <div className={style['todo-list__all-checked']}>
        <input type="checkbox" onChange={checkAllToDo}/>
        <span>Check all toDoList</span>
      </div>
      <ul className={style['todo-list__container']}>
        { toDoList.map((toDo) => {
          return <ToDo
            text={toDo.text}
            checked={toDo.checked}
            key={toDo.id}
            deleteToDo={() => deleteToDo(toDo.id)}
            checkToDo={() => checkToDo(toDo.id)}
          />
        }) }
      </ul>
    </>
  )
}

export default ToDoList
