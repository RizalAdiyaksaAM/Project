import { useMutation } from "@tanstack/react-query";
import http from "../../utils/Http";
import { endpoint } from "../../utils/endpoint";

const updateTransaction = async (id, input) => {
  try {
    const response = await http.put(endpoint.UPDATE_TRANSACTION(id), input);
    return response;
  } catch (error) {
    console.error("Error while updating transaction:", error);
    throw error;
  }
};

const usePutTransaction = () => {
  return useMutation(updateTransaction);
};

export { updateTransaction, usePutTransaction };
