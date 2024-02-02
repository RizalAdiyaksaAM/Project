// import { useMutation } from "@tanstack/react-query";
import http from "../../utils/Http";
import { endpoint } from "../../utils/endpoint";

// const updateTransaction = async (id, input) => {
//   return await http
//     .put(endpoint.UPDATE_TRANSACTION(id, input))
//     .then((result) => {
//       // return true;
//     })
//     .catch((err) => {
//       // return false;
//     });
// };

// const usePutTransaction = () => {
//   return useMutation(updateTransaction);
// };

// export { updateTransaction, usePutTransaction };

const reduxUpdatePass = async (id, input) => {
  return await http.put(endpoint.UPDATE_TRANSACTION(id), input);
};
export default reduxUpdatePass;
