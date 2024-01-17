import style from "./ToDo.module.css";
import TrashCanIcon from "../../icons/TrashCanIcon";
import PropTypes from "prop-types";
import { useCallback } from "react";
import useUpdateEffect from "../../../hooks/useUpdateEffect";

const ToDo = ({ checked, text, id, onDeleteToDo, onCheckToDo }) => {
  const cb = useCallback(() => {
    console.log(`TODO with id ${id} has been ${checked ? "checked" : "unchecked"}`);
  }, [checked, id]);
  
  useUpdateEffect(cb, checked)

  return (
    <li className={style["todo__container"]}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onCheckToDo({ id, value: event.target.checked })}
      />
      <span
        className={
          checked
            ? `${style["todo__content"]} ${style["todo__content--disable"]}`
            : style["todo__content"]
        }
      >
        {text}
      </span>
      <button onClick={() => onDeleteToDo(id)}>
        <TrashCanIcon />
      </button>
    </li>
  );
};

ToDo.propTypes = {
  text: PropTypes.string,
  checked: PropTypes.bool,
  id: PropTypes.number,
  onDeleteToDo: PropTypes.func,
  onCheckToDo: PropTypes.func,
};

export default ToDo;
