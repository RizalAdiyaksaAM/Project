import { combineReducers } from "redux";
import authLogin from "./auth/authLogin";
import authRegiste from "./auth/authRegiste";
import GetUser from "./GetUser";
import GetPelanggan from "./GetPelanggan";
import GetDetailProduct from "./product/GetDetailProduct";
import Updatepasslicers from "./admin/putTransaction";
import UpdatepassProduk from "./admin/putProduct";
import CardAdm from "./admin/Get-Produk";

export default combineReducers({
  login: authLogin,
  regis: authRegiste,
  user: GetUser,
  penjual: GetPelanggan,
  detail: GetDetailProduct,
  update: Updatepasslicers,
  produk: UpdatepassProduk,
  Card: CardAdm,
});
