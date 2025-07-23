import React from 'react';
import AddTask from './Features/tasks/AddTask';
import TaskList from './Features/tasks/TaskList';

const App = () => {
  return (
    <div className="App">
      <AddTask />
      <TaskList />
    </div>
  );
};

export default App;
