import { useQuery } from "@tanstack/react-query";
import { endpoint } from "../../utils/endpoint";
import http from "../../utils/Http";

// const fetchDataPenjualProduk = async ({ queryKey }) => {
//   const [_key, _params] = queryKey;
//   const { data } = await http.get(_key, { params: _params });
//   return data;
// };

// const useDataProdukPenjual = (options) => {
//   return useQuery([endpoint.GET_PRODUK_EDIT, options], fetchDataPenjualProduk);
// };
// export { fetchDataPenjualProduk, useDataProdukPenjual };

export const GetDataCard = async () => {
  return await http.get(endpoint.GET_PRODUK_EDIT);
};
