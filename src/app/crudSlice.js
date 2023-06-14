import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      title: "Navbar düzenlensin",
      author: "Dursun",
      assigned_to: "Aydın",
      end_date: "2023-06-19",
      id: 1,
    },
    {
      title: "Foother animasyon",
      author: "Aydın",
      assigned_to: "Dursun",
      end_date: "2023-03-01",
      id: 2,
    },
  ],
};

const todoSlice = createSlice({
  name: "crudSlice",
  initialState,
  reducers: {
    addTask: (state, action) => {
      if (action.payload.id) {
        const index = state.tasks.findIndex(
          (item) => item.id === action.payload.id
        );
        state.tasks[index] = action.payload;
        return;
      }

      const maxId = state.tasks.length + 1;
      action.payload.id = maxId;
      state.tasks = [...state.tasks, action.payload];
    },
    removeTask: (state, action) => {
      const taskId = action.payload;
      const index = state.tasks.findIndex((task) => task.id === taskId);
      if (index !== -1) {
        state.tasks.splice(index, 1);
      }
    },
  },
});

export const { addTask, removeTask } = todoSlice.actions;
export default todoSlice.reducer;
