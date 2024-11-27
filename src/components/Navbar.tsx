import React from "react";

const Navbar = () => {
  return (
    <div className="h-[75px]  bg-[#263C4C] text-white flex justify-around ">
      <div className="h-[58px] w-[187px] flex items-center text">
        <h3 className="text-[24px] font-bold">BrandName</h3>
      </div>
      <div className="flex h-[58px] w-[815px] justify-around items-center ">
        <div className="w-[275px] h-6 ">
          <ul className="flex gap-[21px]  ">
            <li>Home</li>
            <li>Product</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex h-[52px]  items-center gap-[45px] ">
          <ul className="w-[41px] h-[22px] ">
            <li>login</li>
          </ul>
          <button className="h-[52px] w-[110px] bg-[#23A6F0] rounded-[5px]">
            JOIN US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
