import React, { useState } from 'react';
import './TodoList.css'; // Import the CSS file for styling

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [description, setDescription] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: `${newTask}`, desc:` ${description}`, completed: false }]);
      setNewTask('');
      setDescription(''); // Clear description after adding a task
    }
  };
  

  const toggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="todo-container">
        <h1>Todo List</h1>
        <div className="form">
      
      <div className="todo-form">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
       
      </div>
      <div className="todo-description">
      <input
          type="text"
          placeholder="Write a description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        
      </div> <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span>{task.text}</span>
            <span>{task.desc}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
