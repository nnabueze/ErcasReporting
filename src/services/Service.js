import * as axios from "axios";
import { DASHBOARD_URL, LOGIN_URL } from "../Contants";

export const LoginService = async (payload) => {
  try {
    const formData = {
      UserName: payload.email,
      Password: payload.password,
    };
    let res = await axios.post(LOGIN_URL, formData);
    return res.data;
  } catch (e) {
    throw handler(e);
  }
};

export const DashboardService = (payload) => {
  const formData = {
    BillerId: payload,
  };

  return axios.post(DASHBOARD_URL, formData);
};

export const handler = (err) => {
  return err.response.data;
};
