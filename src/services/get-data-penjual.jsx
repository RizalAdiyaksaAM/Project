import http from "../utils/Http";
import { endpoint } from "../utils/endpoint";

export const reduxGetPenjual = async (penjualId) => {
    return  await http.get(endpoint.USER_PENJUAL(penjualId));
  } 