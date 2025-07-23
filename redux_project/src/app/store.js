import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../Features/tasks/taskSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
