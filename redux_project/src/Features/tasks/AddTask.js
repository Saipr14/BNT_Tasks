import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './taskSlice';

const AddTask = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTask(input));
      setInput('');
    }
  };

  return (
    <div className="container addTask">
        <h1>Redux Task Manager</h1>
        <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter task..." />
        <button type="submit">Add</button>
        </form>
    </div>
  );
};

export default AddTask;
