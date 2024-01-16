import http from "../../utils/Http";
import { endpoint } from "../../utils/endpoint";


export const reduxRegisterUser = async (input) => {
    return await http.post(endpoint.REGISTER, input);
  };