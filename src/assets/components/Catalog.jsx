import React from "react";

export const Catalog = () => {
  return (
    <section className="catalog">
      <div className="container mx-auto">
        <div className="content-top">
          <button className="btn hover:text-[#62AF2F] focus:text-[#62AF2F] font-semibold">
            Beranda
          </button>
          <button className="btn hover:text-[#62AF2F] focus:text-[#62AF2F] font-semibold">
            Produk
          </button>
        </div>
        <div className="content-bottom"></div>
      </div>
    </section>
  );
};
