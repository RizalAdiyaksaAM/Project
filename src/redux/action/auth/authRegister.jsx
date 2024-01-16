import { reduxRegisterUser } from "../../../services/auth/authRegister";
import { setRegis, setUserRegis } from "../../reducer/auth/authRegiste";


export const RegisterUserrr = (input) => async (dispatch) => {
    try {
      const result = await reduxRegisterUser(input);
      // CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
      dispatch(setRegis(true));
      dispatch(setUserRegis(input));
      // dispatch(setToken(result.data.data.token));
      return true;
    } catch (err) {
      return false;
    }
  };