import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./store/userSlice";
import UserList from "./component/UserList";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleAdd = () => {
    if (name == "" || username == "") {
      setError("Name and username cannot be empty");
      return;
    }

    dispatch(
      addUser({
        id: userList.length === 0 ? 1 : userList[userList.length - 1].id + 1,
        name: name || "Dummy test",
        username: username || "Dummy test",
      })
    );
    setError("");
    setName("");
    setUsername("");
  };

  return (
    <>
      <h1>TEst</h1>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleAdd}>Add User</button>
        {error && <span style={{ color: "red" }}>{error}</span>}
      </div>

      {userList.map((user) => (
        <UserList user={user} key={user.id} />
      ))}
    </>
  );
}

export default App;
