import { useMutation } from "@tanstack/react-query";
import http from "../../utils/Http";
import { endpoint } from "../../utils/endpoint";

const updateProduct = async (id, input) => {
  return await http
    .put(endpoint.UPDATE_PRODUK(id), input)
    .then((result) => {
      return true;
    })
    .catch((err) => {
      return false;
    });
};

const usePutProduct = () => {
  return useMutation(updateProduct);
};

export { updateProduct, usePutProduct };
