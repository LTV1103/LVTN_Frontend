import { useEffect, useState } from "react";
import userApi from "../../../services/userApi";
import "./load.styles.css"; // import CSS

export default function LoadDataUser() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);


  //Call API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await userApi.fetchUsers();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await userApi.deleteUser(id);
      setUsers(users.filter((u) => u.id !== id));
      alert("Xóa thành công!");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleEdit = async (id, newData) => {
    try {
      const updated = await userApi.updateUser(id, newData);
      setUsers(users.map((u) => (u.id === id ? updated : u)));
      alert("Cập nhật thành công!");
    } catch (err) {
      alert(err.message);
    }
  };

  //UI
  return (
    <div className="admin-dashboard-wrapper p-1">
      <h1 className="admin-dashboard-title">Quản lý người dùng</h1>      
      {error && <p style={{ color: "red", marginBottom: "16px" }}>{error}</p>}
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Họ tên</th>
            <th>Email</th>
            <th>Provider</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.fullname}</td>
              <td>{u.email}</td>
              <td>{u.provider}</td>
              <td>
                <button className="btn-edit" onClick={() => handleEdit(u.id, { fullname: "Tên mới" })}>Sửa</button>
                <button className="btn-delete" onClick={() => handleDelete(u.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
