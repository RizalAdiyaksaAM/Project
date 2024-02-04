import { GetDataCard } from "../../../services/product/get-produk";
import { setCardAdmin } from "../../reducer/admin/Get-Produk";

const getDataCard = () => async (dispatch) => {
  return await GetDataCard()
    .then((result) => {
      dispatch(setCardAdmin(result.data.data));
    })
    .catch((err) => console.error(err, "error"));
};

export default getDataCard;
