import React, { useState } from "react";
import logo from "../../assets/svg/LogoBroyur.svg";
import ic_produk from "../../assets/svg/ic_file_dock_search.svg";
import ic_pesanan from "../../assets/svg/ic_file_dock_search.svg";
import { useDispatch } from "react-redux";
import { addProductAct } from "../../redux/action/product/addProductActions";
import { useNavigate } from "react-router-dom";

const Add_Product = () => {
  const [images, setImages] = useState(null);
  const [isMenu, setIsMenu] = useState(false);

  const [formData, setFormData] = useState({
    nama: "",
    deskripsi: "",
    harga: "",
    satuan: "",
    kategori: "",
    stok: 0,
    image: null,
  });

  console.log(formData, "form data");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const fileList = e.target.files;
    const imageArray = Array.from(fileList).map((file) =>
      URL.createObjectURL(file)
    );
    const { name } = e.target;

    setFormData({ ...formData, [name]: fileList[0] });
    setImages(imageArray);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddProduct = async () => {
    const success = await dispatch(addProductAct(formData));
    if (success) {
      navigate("/penjual_produk");
    }
  };

  return (
    <>
      <div className="section_produk bg-[#F8F8F8] h-screen px-4 md:px-0">
        <div className="container mx-auto flex gap-[16px] h-screen ">
          <nav className="nav-left hidden md:flex flex-col gap-[20px] p-[24px] bg-white w-[211px] h-screen">
            <a href="/penjual_produk" className="logo">
              <img src={logo} alt="" className="ic" />
            </a>
            <div className="nav-left-menu flex gap-[16px] flex-col">
              <a href="/penjual_produk" className="flex items-center gap-[4px]">
                <img src={ic_produk} alt="" />
                Produk
              </a>
              <a
                href="/penjual_pesanan"
                className="flex items-center gap-[4px]"
              >
                <img src={ic_pesanan} alt="" />
                Pesanan
              </a>
            </div>
          </nav>
          {isMenu && (
            <nav className="absolute right-0 flex md:hidden flex-col gap-[20px] p-[24px] bg-white w-[211px] h-screen">
              <a href="/penjual_produk" className="logo">
                <img src={logo} alt="" className="ic" />
              </a>
              <div className="nav-left-menu flex gap-[16px] flex-col">
                <a
                  href="/penjual_produk"
                  className="flex items-center gap-[4px]"
                >
                  <img src={ic_produk} alt="" />
                  Produk
                </a>
                <a
                  href="/penjual_pesanan"
                  className="flex items-center gap-[4px]"
                >
                  <img src={ic_pesanan} alt="" />
                  Pesanan
                </a>
              </div>
            </nav>
          )}
          <div className="pesanan w-full flex  flex-col gap-4 pt-2">
            <div
              onClick={() => {
                setIsMenu(!isMenu);
              }}
              className="bg-white w-full flex md:hidden rounded-md px-4 py-2 cursor-pointer"
            >
              <p
                onClick={() => {
                  setIsMenu(!isMenu);
                }}
                className="cursor-pointer"
              >
                {isMenu ? "Close Menu" : "Menu"}
              </p>
            </div>
            <div className="bg-white w-full rounded-md p-4">
              <h1 className="text-[#142309] font-semibold text-lg">
                Tambah Produk
              </h1>
              <hr className="my-2 bg-abufont" />
              <h2 className="mb-4 text-black font-medium">Informasi Produk</h2>
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-3">
                  <label
                    htmlFor="product_name"
                    className="col-span-3 md:col-span-1 mb-2 md:mb-0 text-[#142309] font-medium"
                  >
                    Nama Sayur
                  </label>
                  <input
                    name="nama"
                    value={formData.nama}
                    onChange={handleInputChange}
                    placeholder="Tuliskan nama sayur anda"
                    type="text"
                    className="placeholder:text-sm outline outline-2 outline-[#F8F8F8] bg-transparent px-2 py-1 rounded-md col-span-3 md:col-span-2"
                  />
                </div>
                <div className="grid grid-cols-3">
                  <label
                    htmlFor="stok"
                    className="col-span-3 md:col-span-1 mb-2 md:mb-0 text-[#142309] font-medium"
                  >
                    Stok
                  </label>
                  <input
                    name="stok"
                    value={formData.stok}
                    onChange={handleInputChange}
                    placeholder="Tuliskan stok sayur anda"
                    type="number"
                    className="placeholder:text-sm outline outline-2 outline-[#F8F8F8] bg-transparent px-2 py-1 rounded-md col-span-3 md:col-span-2"
                  />
                </div>
                <div className="grid grid-cols-3">
                  <label
                    htmlFor="category"
                    className="col-span-3 md:col-span-1 mb-2 md:mb-0 text-[#142309] font-medium"
                  >
                    Kategori
                  </label>
                  <select
                    name="kategori"
                    value={formData.kategori}
                    onChange={handleInputChange}
                    id="kategori"
                    className="col-span-3 md:col-span-2 outline outline-2 outline-[#F8F8F8] bg-transparent px-2 py-1 rounded-md"
                  >
                    <option value="SAYUR">Sayur</option>
                    <option value="DAGING_DAN_IKAN">Daging dan Ikan</option>
                    <option value="BUAH">Buah</option>
                    <option value="TELUR_TAHU_TEMPE">
                      Telur, Tahu dan Tempe
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="bg-white w-full rounded-md p-4">
              <h2 className="mb-4 text-black font-medium">Detail Produk</h2>
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-3">
                  <label
                    htmlFor="product_images"
                    className="col-span-3 md:col-span-1 text-black font-medium mb-2"
                  >
                    Foto Produk
                  </label>
                  <input
                    name="image"
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    multiple
                  />
                  <div className="col-span-3 flex gap-2 mt-4">
                    {images?.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Preview ${index + 1}`}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-3 w-full">
                  <div className="flex flex-col gap-2 col-span-3 md:col-span-1">
                    <label
                      htmlFor="description"
                      className="col-span-3 md:col-span-1 text-black font-medium"
                    >
                      Deskripsi Produk
                    </label>
                    <p className="col-span-3 md:col-span-1 text-sm text-abufont">
                      Tulis Deskripsi produkmu maximal 250 kata
                    </p>
                  </div>
                  <textarea
                    name="deskripsi"
                    value={formData.deskripsi}
                    onChange={handleInputChange}
                    id="deskripsi"
                    rows="7"
                    className="p-2 col-span-3 md:col-span-2 outline outline-2 outline-abubg rounded-md"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="bg-white w-full rounded-md p-4">
              <h2 className="mb-4 text-black font-medium">Harga</h2>
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-3">
                  <label
                    htmlFor="type"
                    className="col-span-3 md:col-span-1 text-[#142309] font-medium mb-2"
                  >
                    Jenis Satuan
                  </label>
                  <select
                    name="satuan"
                    value={formData.satuan}
                    onChange={handleInputChange}
                    id="satuan"
                    className="col-span-3 md:col-span-2 outline outline-2 outline-abubg bg-transparent px-2 py-1 rounded-md"
                  >
                    <option value="sachet">Sachet</option>
                    <option value="kg">Kg</option>
                    <option value="ikat">Ikat</option>
                  </select>
                </div>
                <div className="grid grid-cols-3">
                  <label
                    htmlFor="product_name"
                    className="col-span-3 md:col-span-1 text-[#142309] font-medium mb-2"
                  >
                    Harga
                  </label>
                  <input
                    placeholder="Masukkan Harga"
                    type="tel"
                    name="harga"
                    value={formData.harga}
                    onChange={handleInputChange}
                    className="placeholder:text-sm outline outline-2 outline-abubg bg-transparent px-2 py-1 rounded-md col-span-3 md:col-span-2"
                  />
                </div>
              </div>
            </div>
            {/* <div className="bg-white w-full rounded-md p-4">
              <h2 className="mb-4 text-black font-medium">Pembayaran</h2>
              <div className="grid grid-cols-3">
                <h2 className="col-span-3 md:col-span-1 text-[#142309] font-medium mb-2">
                  Jenis Pembayaran
                </h2>
                <div className="col-span-3 md:col-span-2 flex flex-col md:flex-row gap-2 md:gap-8">
                  <div className="custom-checkbox-container">
                    <input
                      type="checkbox"
                      id="cod"
                      name="cod"
                      value="cod"
                      className="custom-checkbox"
                    />
                    <label htmlFor="cod"> Cash On Delivery</label>
                  </div>
                  <div className="custom-checkbox-container">
                    <input
                      type="checkbox"
                      id="tf"
                      name="tf"
                      value="tf"
                      className="custom-checkbox"
                    />
                    <label htmlFor="tf"> Bank Transfer</label>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="w-full flex justify-center md:justify-end pb-8 px-4 lg:px-0">
              <div className="flex gap-2 w-full md:w-1/3">
                <button className="w-full px-4 py-2 rounded-md bg-white border border-red-500 text-red-500">
                  Batal
                </button>
                <button
                  onClick={handleAddProduct}
                  className="w-full px-4 py-2 rounded-md bg-primaryhijau text-white"
                >
                  Tambah
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add_Product;
