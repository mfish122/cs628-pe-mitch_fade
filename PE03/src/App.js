import React, { useState } from 'react';
import './App.css';

const TodoList = ({ tasks, onDelete }) => {
  return (
    <div className="todo-list">
      {tasks.map((task, index) => (
        <div key={index} className="todo-item">
          <span>{task}</span>
          <button className="delete-button" onClick={() => onDelete(index)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const AddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const DeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>ToDo List App</h1>
      <div className="enter-tasks">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task description"
        />
        <button onClick={AddTask}>Add Task</button>
      </div>
      <TodoList tasks={tasks} onDelete={DeleteTask} />
    </div>
  );
};

export default App;
