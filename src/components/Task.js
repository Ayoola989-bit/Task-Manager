import React from 'react';

function Task({ task, toggleTaskCompletion, deleteTask }) {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleTaskCompletion(task.id)}> 
        {task.completed ? '✔️ ' : ''}{task.title}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default Task;