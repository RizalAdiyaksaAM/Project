export const endpoint = {
  LOGIN: "/api/v1/user/login",
  REGISTER: "/api/v1/user/register",
  USER: (alamat) => {
    return `/api/v1/user/?alamat=${alamat}`;
  },
  USER_PENJUAL: (id) => {
    return `/api/v1/produk/pembeli/${id}`;
  },
  USER_PENJUAL_KATEGORI: (id, kategori) => {
    return `/api/v1/produk/pembeli/${id}/?kategori=${kategori}`;
  },
  ADD_PRODUCT: "/api/v1/produk/add",
  PRODUCT_PENJUAL: "api/v1/produk/penjual",
  DETAIL_PRODUCT: (id) => {
    return `/api/v1/produk/${id}`;
  },
  SEARCH_PENJUAL: "",
  GET_PRODUK_PENJUAL: "api/v1/transaksi",

  UPDATE_TRANSACTION: (id) => {
    return `api/v1/transaksi/update/${id}`;
  },
  UPDATE_PRODUK: (id) => {
    return `api/v1/produk/update/${id}`;
  },
  GET_PRODUK_EDIT: `api/v1/produk/me`,
  FILTER_PRODUK: "api/v1/transaksi/me",
};
