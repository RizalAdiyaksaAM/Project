import { combineReducers } from "redux";
import authLogin from "./auth/authLogin";
import authRegiste from "./auth/authRegiste";
import GetUser from "./GetUser";
import GetPelanggan from "./GetPelanggan";


export default combineReducers({

    login : authLogin,
    regis: authRegiste,
    user : GetUser,
    penjual : GetPelanggan
})