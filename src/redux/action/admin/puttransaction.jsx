import { setupdatepass } from "../../reducer/admin/putTransaction";
import reduxUpdatePass from "../../../services/product/put_transaction";

const getupdates = (id, input) => async (dispatch) => {
  return reduxUpdatePass(id, input)
    .then((result) => {
      dispatch(setupdatepass(id, input));
      return result;
    })
    .catch((err) => console.error(err, "error"));
};

export default getupdates;
