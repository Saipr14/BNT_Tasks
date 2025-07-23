import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    nextId: 1, // Counter for the next ID
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: state.nextId,
        text: action.payload,
        completed: false,
      });
      state.nextId += 1;
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(t => t.id !== action.payload);
    },
  },
});

export const { addTask, toggleTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
