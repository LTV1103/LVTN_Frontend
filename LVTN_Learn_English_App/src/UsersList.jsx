import { useEffect, useState } from "react";
import Api  from "./Config/api";

const App = () => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loadUsers = async () => {
      const data = await Api.fetchUsers();
      if (data.length === 0) {
        setMessage("❌ Không lấy được danh sách user!");
      }
      setUsers(data);
    };
    loadUsers();
  }, []);   

  return (
    <div style={{ padding: "20px" }}>
      <h1>Danh sách user</h1>
      {message && <p>{message}</p>}
      {users.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((u, idx) => (
            <li key={idx}>
              {u.fullname} - {u.username} - {u.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
