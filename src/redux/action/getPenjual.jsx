import { reduxGetPenjual } from "../../services/get-data-penjual";
import { setpenjual } from "../reducer/GetPelanggan";

const getPenjual = (penjualId) => async (dispatch) => {
    return await reduxGetPenjual(penjualId)
      .then((result) => {
        dispatch(setpenjual(result.data.data));
        console.log(result);
      })
      .catch((err) => console.error(err, "error"));
  };
  
  
  export default getPenjual;