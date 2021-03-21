import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faSquare, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'

const Task = ({task, toggleComplete, editTask, deleteTask}) => {

  const [editingTask, changeEditing] = useState(false);

  const [newTask, changeNewTask] = useState(task.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(task.id, newTask);
    changeEditing(false);
  }

  return (
    <>
      <li className="lista-tareas__tarea">

        <FontAwesomeIcon 
          icon={task.complete ? faCheckSquare : faSquare} 
          className="lista-tareas__icono lista-tareas__icono-check"
          onClick={() => toggleComplete(task.id)}
        />

        <div className="lista-tareas__texto">

          {editingTask 
          ?
            <form className="formulario-editar-tarea" onSubmit={handleSubmit}>

              <input  
                type="text" 
                className="formulario-editar-tarea__input"
                value={newTask}
                onChange={(e) => changeNewTask(e.target.value)}
              />

              <button 
                className="formulario-editar-tarea__btn"
              >
                Editar
              </button>

            </form>  
          :
            task.text
          }
        </div>

        <div className="lista-tareas__contenedor-botones">

          <FontAwesomeIcon 
            icon={faEdit} 
            className="lista-tareas__icono lista-tareas__icono-accion"
            onClick={() => changeEditing(!editingTask)}
          />

          <FontAwesomeIcon 
            icon={faTimes} 
            className="lista-tareas__icono lista-tareas__icono-accion"
            onClick={() => deleteTask(task.id)}
          />

        </div>

      </li>
    </>
  );
}
 
export default Task;