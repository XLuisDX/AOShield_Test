import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  posts: [],
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
    viewUser: (state, action) => {
      const data = action.payload;
      state.posts = data;
    },
  },
});

export default UsersSlice.reducer;
export const { addUser, deleteUser, setUsers, viewUser } = UsersSlice.actions;
