import { reduxGetKategori } from "../../../services/product/get-product-kategori";
import { setpenjual } from "../../reducer/GetPelanggan";

const getKategori = (penjualId, kategoriId) => async (dispatch) => {
    return await reduxGetKategori(penjualId, kategoriId)
      .then((result) => {
        dispatch(setpenjual(result.data.data));
        console.log(result);
      })
      .catch((err) => console.error(err, "error"));
  };
  
  
  export default getKategori;