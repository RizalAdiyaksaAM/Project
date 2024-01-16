import http from "../../utils/Http";
import { endpoint } from "../../utils/endpoint";

export const reduxLoginUser = async (input) => {
    return await http.post(endpoint.LOGIN, input);
  };