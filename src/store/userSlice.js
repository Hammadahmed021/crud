import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../localDB";

const initialState = {
  value: UsersData,
};
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    updateUser: (state, action) => {
        // const { id, username } = action.payload;
        const user = state.value.find(user => user.id === action.payload.id);
        if (user) {
          user.username = action.payload.username;
        }
      
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;

// updateUser: (state, aciton) => {
//     state.value.map((user) => {
//           if(user.id === aciton.payload.id) state.username = aciton.payload.username
//       })
//   },


