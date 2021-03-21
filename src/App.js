import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TasksList from './components/TasksList';
import './App.css';

function App() {

  // GET SAVED TASKS
  const storedData = localStorage.getItem('myTasks') ? 
  JSON.parse(localStorage.getItem('myTasks')) : [];

  let configShowComplete = '';

  if(localStorage.getItem('showComplete') === null){
    configShowComplete = true;
  } else {
    configShowComplete = localStorage.getItem('showComplete') === 'true';
  }

  const[tasks, changeTasks] = useState(storedData);
  const [showComplete, changeShowComplete] = useState(configShowComplete);

  // SAVE STATE IN LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem('myTasks', JSON.stringify(tasks));
  }, [tasks]);

  // SAVE STATE OF SHOW COMPLETE TASKS
  useEffect(() => {
    localStorage.setItem('showComplete', showComplete.toString());
  }, [showComplete]);

  return (
    <div className="contenedor">

      <Header 
        showComplete={showComplete} 
        changeShowComplete={changeShowComplete} 
      /> 

      <Form tasks={tasks} changeTasks={changeTasks} />

      <TasksList 
        tasks={tasks} 
        changeTasks={changeTasks}
        showComplete={showComplete}
      />
      
    </div>
  );
}

export default App;
