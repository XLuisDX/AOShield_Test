import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

export const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      const data = action.payload;
      state.user = data;
    },
    addUser: (state, action) => {
      state.user.push(action.payload);
    },
    deleteUser: (state, action) => {
      const founded = state.user.find((user) => user.id === action.payload);
      if (founded) {
        state.user.splice(state.user.indexOf(founded), 1);
      }
    },
  },
});

export default UsersSlice.reducer;
export const { addUser, deleteUser, setUsers } = UsersSlice.actions;
