import { useQuery } from "@tanstack/react-query";
import { endpoint } from "../../utils/endpoint";
import http from "../../utils/Http";

const fetchDataFilter = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(_key, { params: _params });
  return data;
};

const useDataProdukFilter = (options) => {
  return useQuery([endpoint.FILTER_PRODUK, options], fetchDataFilter);
};
export { fetchDataFilter, useDataProdukFilter };
