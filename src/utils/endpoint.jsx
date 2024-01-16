

export const endpoint = {
    LOGIN : "/api/v1/user/login",
    REGISTER : "/api/v1/user/register",
    USER : (alamat) => {
        return `/api/v1/user/?alamat=${alamat}`;
    },
    USER_PENJUAL : (id) => {
        return `/api/v1/produk/pembeli/${id}`
    } 
};
