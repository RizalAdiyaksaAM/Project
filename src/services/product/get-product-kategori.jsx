import http from "../../utils/Http";
import { endpoint } from "../../utils/endpoint";

export const reduxGetKategori = async (penjualId,kategoriId) => {
    return  await http.get(endpoint.USER_PENJUAL_KATEGORI(penjualId,kategoriId));
  } 