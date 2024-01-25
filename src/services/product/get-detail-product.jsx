import http from "../../utils/Http";
import { endpoint } from "../../utils/endpoint";

export const reduxDetailProduct = async (productId) => {
    return  await http.get(endpoint.DETAIL_PRODUCT(productId));
  } 