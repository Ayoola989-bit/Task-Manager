import React, { useState } from 'react';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]); //state variable-tasks as an empty array, stores all the tasks
  const [taskTitle, setTaskTitle] = useState(''); //taskTitle as an empty string, holds title of task in input box. setTasks and setTaskTitle- updates changes.

  const addTask = () => { //addTask is called when I click the Add Task button
    if (taskTitle.trim()) { // .trim ensures empty spaces are not added to the task as inputs
      setTasks([...tasks, { id: Date.now(), title: taskTitle, completed: false }]); //updates the task array by adding a new task, ...tasks is an operator that copies all existing tasks.
      setTaskTitle(''); // clears the input box after adding a task
    }
  };

  const toggleTaskCompletion = (id) => {//changes the completed status of the task when its clicked
    setTasks(
      tasks.map((task) => //loops through each task in the task array
        task.id === id ? { ...task, completed: !task.completed } : task // checks if the current task id equals id in the function, if it matches it creates a new task object, : task- if id do not match it doesnt make any change
      )
    );
  };

  const deleteTask = (id) => { //removes a task from the list
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return ( //what the app component displays on the screen
    <div className="app-container">
      <h1>Simple Task Manager</h1>
      <div className="task-input">
        <input // a text box where new task is typed
          type="text"
          placeholder="Enter a new task"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)} //updates TaskTitle whenever user types in the input box
        />
        <button onClick={addTask}>Add Task</button> 
      </div>
      <TaskList //receives three props as shown below.
        tasks={tasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;