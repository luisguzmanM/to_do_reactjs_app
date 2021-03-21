import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4 } from 'uuid';


const Form = ({tasks, changeTasks}) => {

  const [inputTask, changeInput] = useState('');

  const handleInput = (e) => {
    changeInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    changeTasks(
      [
        ...tasks,
        {
          id:uuidv4(),
          text: inputTask,
          complete: false
        }
      ]
    );
    changeInput('');
  }

  return (
    <form className="formulario-tareas" onSubmit={handleSubmit}>
      
      <input 
        type="text" 
        className="formulario-tareas__input" 
        placeholder="Type a task"
        value={inputTask}
        onChange={(e) => handleInput(e)}
      />

      <button 
        type="submit" 
        className="formulario-tareas__btn"
      >
        <FontAwesomeIcon 
          icon={faPlusSquare} 
          className="formulario-tareas__icono-btn"
        />
      </button>

    </form>
  );
}
 
export default Form;