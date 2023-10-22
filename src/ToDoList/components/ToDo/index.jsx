import style from  './ToDo.module.css'
import TrashCanIcon from '../../icons/TrashCanIcon'
// eslint-disable-next-line react/prop-types
const ToDo = ({ checked, text, deleteToDo, checkToDo }) => {
  return (
    <li className={style['todo__container']}>
      <input
        type="checkbox"
        checked={checked}
        onChange={checkToDo}
      />
      <span className={style['todo__content']}>
        {text}
      </span>
      <button onClick={deleteToDo}>
        <TrashCanIcon />
      </button>
    </li>
  )
}

export default ToDo
