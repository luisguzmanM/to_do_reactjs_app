import React from 'react';
import Task from './Task';

const TasksList = ({tasks, changeTasks, showComplete}) => {

  const toggleComplete = (id) => {
    changeTasks(tasks.map( (task) => {
      if(task.id === id){
        return {
          ...task, complete: !task.complete
        }
      } else {
        return task;
      }
    }))
  }

  const editTask = (id, newText) => {
    changeTasks(tasks.map( (task) => {
      if(task.id === id){
        return {
          ...task, text: newText
        }
      } else {
        return task;
      }
    }))
  }

  const deleteTask = (id, newText) => {
    changeTasks(tasks.filter( (task) => {
      if(task.id !== id){
        return task;
      } else {
        return;
      }
    }))
  }

  return (
    <ul className="lista-tareas">
      {
        tasks.length > 0 ? tasks.map((task) => {

          if(showComplete){
            return <Task 
                      key={task.id}
                      task={task}
                      toggleComplete={toggleComplete}
                      editTask={editTask}
                      deleteTask={deleteTask}
                    />
          } else if(!task.complete){
            return <Task 
                      key={task.id}
                      task={task}
                      toggleComplete={toggleComplete}
                      editTask={editTask}
                      deleteTask={deleteTask}
                    />
          } else {
            return;
          }
        })
        : <div 
            className="lista-tareas__mensaje">  
            ~ There are tasks added ~ 
          </div>
      }
    </ul>
  );
}

export default TasksList;