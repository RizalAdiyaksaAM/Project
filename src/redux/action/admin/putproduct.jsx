import reduxUpdateProduk from "../../../services/product/put-product";
import { setupdateProduk } from "../../reducer/admin/putProduct";

const getupdatesProduk = (id, input) => async (dispatch) => {
  return reduxUpdateProduk(id, input)
    .then((result) => {
      dispatch(setupdateProduk(id, input));
      return result;
    })
    .catch((err) => console.error(err, "error"));
};

export default getupdatesProduk;
