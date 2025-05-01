import React, { useState } from "react";
import simplehouselogo from "../assets/simplehouselogo.png";
import simplehouse from "../assets/simplehouse.jpg";
import { Menu, X } from "lucide-react"; // optional: lucide icons
import preshtech from "../assets/preshtech.png"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="text-white bg-cover bg-center h-100 w-full "
      style={{
        backgroundImage: `url(${simplehouse})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="flex justify-between items-center px-6 md:px-20 py-4 ">
        {/* Logo + Title */}
        <div className="flex items-center gap-3 ">
          <img
            src={preshtech}
            alt="Simple House Logo"
            className="w-14 h-14 object-contain"
          />
          <div>
            <h1 className="font-bold text-2xl">PresHTech</h1>
            <h3 className="text-sm">best tech template</h3>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-lg">
          {["Home", "About", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden z-20"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Links */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 text-lg bg-black bg-opacity-70 p-6 absolute top-20 left-0 w-full z-10">
          {["Home", "About", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
