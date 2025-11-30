import { callBackend } from "../configs/ConfigBE";
const paymentCourseApi = {
  fetchPaymentCourse: async () => {
    const res = await callBackend("/payment-course", "GET");
    if (!res) return null;
    if (res.data?.data) return res.data.data;
    if (res.data) return res.data;
    return null;
  },

  fetchPaymentCourseID: async (id) => {
    const res = await callBackend(`/payment-course/${id}`, "GET");
    if (!res) return null;
    if (res.data?.data) return res.data.data;
    if (res.data) return res.data;
    return null;
  },

  createPaymentCourse: async (Data) => {
    const res = await callBackend("/payment-course", "POST", Data);
    if (res?.status === 201 && res?.data) return res.data;
    throw new Error(res?.message);
  },

  updatePaymentCourse: async (id, Data) => {
    const res = await callBackend(`/payment-course/${id}`, "PUT", Data);
    if (res?.status === 200 && res?.data) return res.data;
    throw new Error(res?.message);
  },

  deletePaymentCourse: async (id) => {
    const res = await callBackend(`/payment-course/${id}`, "DELETE");
    if (res?.status === 200) return true;
    throw new Error(res?.message);
  },
};

export default paymentCourseApi;
