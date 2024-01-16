import { reduxGetUser } from "../../services/get-data-user";
import { setUser } from "../reducer/GetUser";


const getUser = (alamatId) => async (dispatch) => {
    return await reduxGetUser(alamatId)
      .then((result) => {
        dispatch(setUser(result.data.data));
        console.log(result);
      })
      .catch((err) => console.error(err, "error"));
  };
  
  
  export default getUser;
  