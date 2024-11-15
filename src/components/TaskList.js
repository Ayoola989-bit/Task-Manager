import React from 'react';
import Task from './Task';

function TaskList({ tasks, toggleTaskCompletion, deleteTask }) {//destructuring the props passed to TaskList component, instead of props....
  return (
    <div className="task-list">
      {tasks.length === 0 ? (//checks if the task array is empty and returns the message below
        <p>No tasks available. Add a task!</p>
      ) : (
        tasks.map((task) => (//if there is a task, it loops through it through .map to render the task
          <Task
            key={task.id}// key prop is a special attribute, to updates changes by using the unique id
            task={task}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;