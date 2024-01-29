import { useQuery } from "@tanstack/react-query";
import { endpoint } from "../../utils/endpoint";
import http from "../../utils/Http";

const fetchDataPenjual = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(_key, { params: _params });
  return data;
};

const useDataProduk = (options) => {
  return useQuery([endpoint.GET_PRODUK_PENJUAL, options], fetchDataPenjual);
};
export { fetchDataPenjual, useDataProduk };
