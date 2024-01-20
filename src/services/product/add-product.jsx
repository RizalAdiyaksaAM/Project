import { endpoint } from "../../utils/endpoint";
import imageHttp from "../../utils/imageHttp";

export const AddProductServices = async (input) => {
  return await imageHttp.post(endpoint.ADD_PRODUCT, input);
};
