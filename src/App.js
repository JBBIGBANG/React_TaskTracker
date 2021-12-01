import Header from "./components/Header";
import "./index.css";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

const App = () => {

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      day: "Feb 5th",
      time: " 2:30 pm",
      reminder: true,
    },

    {
      id: 2,
      text: "Watching Movie",
      day: "Feb 5th",
      time: " 2:30 pm",
      reminder: true,
    },

    {
      id: 3,
      text: "Football Match",
      day: "Feb 5th",
      time: " 2:30 pm",
      reminder: false,
    },
  ]);

  //Add Task
  const addTask = (task) => {
    const id = Math.random().toString()
    const newTask = { id, ...task}
    setTasks([...tasks, newTask]) 
  }
  //delete
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  //show all the task by loop
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? {...task, remainder: 
        !task.remainder} : task))
  }
  //form toggle
  const onAddHandler = () => {
    setShowAddTask(!showAddTask)
  }

  return (
    <div className="container">
      <Header onAdd={onAddHandler} showButton={showAddTask}/>

      { showAddTask && <AddTask onAdd = {addTask}/>}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask}
        onToggle = {toggleReminder} />
      ) : (
        "no Task to show"
      )}
    </div>
  );
};

export default App;
