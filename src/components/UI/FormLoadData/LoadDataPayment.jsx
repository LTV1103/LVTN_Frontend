import { useEffect, useState } from "react";
import paymentApi from "../../../services/paymentApi";
import "./load.styles.css"; // dùng chung CSS

export default function PaymentDashboard() {
  const [payments, setPayments] = useState([]);
  const [error, setError] = useState(null);

  // Call API
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const data = await paymentApi.fetchPayment(); // lấy danh sách thanh toán
        setPayments(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchPayments();
  }, []);

  const handleDelete = async (id) => {
    try {
      await paymentApi.deletePayment(id);
      setPayments(payments.filter((p) => p.id_Payment !== id));
      alert("Xóa giao dịch thành công!");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleEdit = async (id, newData) => {
    try {
      const updated = await paymentApi.updatePayment(id, newData);
      setPayments(payments.map((p) => (p.id_Payment === id ? updated : p)));
      alert("Cập nhật giao dịch thành công!");
    } catch (err) {
      alert(err.message);
    }
  };

  // UI
  return (
    <div className="admin-dashboard-wrapper p-1">
      <h1 className="admin-dashboard-title">Quản lý thanh toán</h1>
      {error && <p style={{ color: "red", marginBottom: "16px" }}>{error}</p>}
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Khóa học</th>
            <th>Số tiền</th>
            <th>Ngày thanh toán</th>
            <th>Phương thức</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((p) => (
            <tr key={p.idPayment}>
              <td>{p.id_Payment}</td>
              <td>{p.idUser}</td>
              <td>{p.idCourse}</td>
              <td>{new Intl.NumberFormat('vi-VN').format(p.amount)} ₫</td>
              <td>{new Date(p.createdAt).toLocaleDateString("vi-VN")}</td>
              <td>{p.method}</td>
              <td>
                <button className="btn-edit" onClick={() => handleEdit(p.id_Payment, { amount: 999999 })}>Sửa</button>
                <button className="btn-delete" onClick={() => handleDelete(p.id_Payment)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
