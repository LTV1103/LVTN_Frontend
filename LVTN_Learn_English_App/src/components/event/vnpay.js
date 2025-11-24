import paymentApi from "../../services/paymentApi";

export default async function ThanhToanVNPay(form) {
  try {
    const res = await paymentApi.paymentVNPay(form);

    console.log("Full response:", res); // log trực tiếp JSON object

    return { success: true, payment: res };
  } catch (error) {
    console.error("Lỗi khi tạo thanh toán:", error);
    return { success: false, message: error.message };
  }
}
