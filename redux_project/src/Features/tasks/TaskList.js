import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from './taskSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <div className="container taskList">
        <ul>
        {tasks.map(task => (
            <li key={task.id}>
            <span onClick={() => dispatch(toggleTask(task.id))}
                style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}>
                {task.text}
            </span>
            <button onClick={() => dispatch(deleteTask(task.id))}>❌</button>
            </li>
        ))}
        </ul>
    </div>
    
  );
};

export default TaskList;
