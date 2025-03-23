import { useState } from "react";
import { BtnStarted } from "./ButtonStarted/BtnStarted";

// Icons Close/Hamburger
import iconClose from "../images/icon-close.svg";
import iconHamburger from "../images/icon-hamburger.svg";
import logoEmppresa from '../images/logo.svg'

const NavbarMobile = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-full flex items-center justify-between mb-14 px-5 lg:px-40">
        <img
          className="hover:cursor-pointer"
          src={logoEmppresa}
          alt="Logo de la empresa"
        />
        <div className="flex items-center justify-center gap-x-7 max-md:hidden">
          <a className="hover:cursor-pointer hover:text-gray-400" href="#">Pricing</a>
          <a className="hover:cursor-pointer hover:text-gray-400" href="#">Product</a>
          <a className="hover:cursor-pointer hover:text-gray-400" href="#">About Us</a>
          <a className="hover:cursor-pointer hover:text-gray-400" href="#">Careers</a>
          <a className="hover:cursor-pointer hover:text-gray-400" href="#">Community</a>
        </div>
        <BtnStarted
          txtBtn="Get Started"
          style="bg-BrightRed text-VeryPaleRed px-8 py-4 hover:drop-shadow-3xl hover:opacity-75 max-md:hidden"
        />
        {/* Icon Hamburger */}
        <img
          className="hover:cursor-pointer md:hidden"
          src={isOpen ? iconClose : iconHamburger}
          alt="Icono de hamburguesa"
          onClick={() => setIsOpen(!isOpen)}
        />
      </nav>
      {/* Menu Desplegable Mobile */}
      {isOpen && (
      <div className="absolute mx-auto left-0 right-0 z-30 w-5/6 h-[300px] bg-white flex flex-col gap-y-5 items-center justify-center font-bold drop-shadow-xl">
        <a className="hover:cursor-pointer hover:text-BrightRed" href="#">Pricing</a>
        <a className="hover:cursor-pointer hover:text-BrightRed" href="#">Product</a>
        <a className="hover:cursor-pointer hover:text-BrightRed" href="#">About Us</a>
        <a className="hover:cursor-pointer hover:text-BrightRed" href="#">Careers</a>
        <a className="hover:cursor-pointer hover:text-BrightRed" href="#">Community</a>
      </div>
      )}
    </>
  );
};

export { NavbarMobile };
