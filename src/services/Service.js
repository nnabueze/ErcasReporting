import * as axios from "axios";
import {
  CLEARREMITTANCE_URL,
  DASHBOARD_URL,
  LOGIN_URL,
  VERIFYREMITTANCE_URL,
} from "../Contants";

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

export const VerifyRemittanceService = (billerId, remittanceId) => {
  const formData = {
    RemittanceId: remittanceId,
    BillerId: billerId,
  };
  return axios.post(VERIFYREMITTANCE_URL, formData);
};

export const ClearRemittanceService = (billerId, remittanceId) => {
  const formData = {
    RemittanceId: remittanceId,
    BillerId: billerId,
  };

  return axios.post(CLEARREMITTANCE_URL, formData);
};

export const handler = (err) => {
  return err.response.data;
};
