import http from "../utils/Http";
import { endpoint } from "../utils/endpoint";



export const reduxGetUser = async (alamatId) => {
    return  await http.get(endpoint.USER(alamatId));
  } 