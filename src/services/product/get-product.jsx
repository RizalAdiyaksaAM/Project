import http from "../../utils/Http";
import { endpoint } from "../../utils/endpoint";

export const reduxGetProduct = async () => {
    return  await http.get(endpoint.PRODUCT_PENJUAL);
  } 