import './ToDo.css'
import TrashCanIcon from '../../icons/TrashCanIcon'
// eslint-disable-next-line react/prop-types
const ToDo = ({ checked, text }) => {

  return (
    <li className="todo__container">
      <input
        type="checkbox"
        defaultChecked={checked}
      />
      <span 
        className="todo__content "
      >{text}</span>
      <button>
        <TrashCanIcon />
      </button>
    </li>
  )
}

export default ToDo
