import { reduxDetailProduct } from "../../../services/product/get-detail-product";
import { setdetail } from "../../reducer/product/GetDetailProduct";


const getDetail = (productId) => async (dispatch) => {
    return await reduxDetailProduct(productId)
      .then((result) => {
        dispatch(setdetail(result.data.data));
        console.log(result);
      })
      .catch((err) => console.error(err, "error"));
  };
  
  
  export default getDetail;