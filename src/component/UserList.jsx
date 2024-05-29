import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, deleteUser } from "../store/userSlice";

export default function UserList({ user }) {
  const userList = useSelector((state) => state.users.value);
  console.log(userList, "listing page");

  const dispatch = useDispatch();
  const [newUserName, setNewUserName] = useState("");
  return (
    <>
      <div key={user.id} className="flex">
        <p>{user.name}</p>
        <p>{user.username}</p>
        <input
          type="text"
          value={newUserName}
          onChange={(e) => {
            setNewUserName(e.target.value);
          }}
        />
        <button
          onClick={() =>
            dispatch(
              updateUser({
                id: user.id,
                username: newUserName,
              })
            )
          }
        >
          Update Name
        </button>
        <button
          onClick={() =>
            dispatch(
              deleteUser({
                id: user.id,
              })
            )
          }
        >
          Delete User
        </button>
      </div>
    </>
  );
}
