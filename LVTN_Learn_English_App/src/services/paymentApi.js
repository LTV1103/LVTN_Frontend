import { callBackend } from "../configs/ConfigBE";
const paymentApi = {
  fetchPayment: async () => {
    const res = await callBackend("/payment", "GET");
    if (!res) return null;
    //lay phan data trong JSON
    if (res.data?.data) return res.data.data;
    //lay toan bo JSON
    if (res.data) return res.data;
    return null;
  },

  fetchPaymentByID: async (id) => {
    const res = await callBackend(`/payment/${id}`, "GET");
    if (!res) return null;
    if (res.data?.data) return res.data.data;
    if (res.data) return res.data;
    return null;
  },

  createPayment: async (courseData) => {
    const res = await callBackend("/payment", "POST", courseData);
    if (res?.status === 201 && res?.data) return res.data;
    throw new Error(res?.message);
  },
paymentVNPay: async (formData) => {
  return await callBackend("/payment/create", "POST", formData);
},

  updatePayment: async (id, courseData) => {
    const res = await callBackend(`/payment/${id}`, "PUT", courseData);
    if (res?.status === 200 && res?.data) return res.data;
    throw new Error(res?.message);
  },

  deletePayment: async (id) => {
    const res = await callBackend(`/payment/${id}`, "DELETE");
    if (res?.status === 200) return true;
    throw new Error(res?.message);
  },
};

export default paymentApi;
