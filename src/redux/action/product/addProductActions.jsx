import { AddProductServices } from "../../../services/product/add-product";
import { toast } from "react-toastify";

export const addProductAct = (input) => async () => {
  return await AddProductServices(input)
    .then((result) => {
      toast.success("Tambah Produk Sukses");
      return true;
    })
    .catch((err) => {
      toast.error("Tambah Produk Gagal");
      console.log(err, "error");
    });
};
