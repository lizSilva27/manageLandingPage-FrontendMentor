import React from "react";
import { useState } from "react";
import { BtnStarted } from "../ButtonStarted/BtnStarted";

import { IconFacebook } from "../Logo/IconFacebook";
import {IconYoutube} from "../Logo/IconYoutube";
import {IconTwitter} from "../Logo/IconTwitter";
import {IconPinterest} from "../Logo/IconPinterest";
import {IconInstagram} from "../Logo/IconInstagram";
import {LogoManage} from "../Logo/LogoManage";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError(null);
  };

  const validateEmail = () => {
    // Expresión regular para validar correos
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please insert a valid email");
    } else {
      setError(false);
    }
  };

  return (
    <footer className="w-full h-[540px] lg:max-h-[255px] bg-VeryDarkBlue p-7 grid grid-cols-1 lg:items-center lg:grid-cols-3">
      {/* Input and Button */}
      <div className="flex flex-col items-center justify-center lg:order-3 gap-y-14">
        <div className="flex gap-3 items-start justify-center w-full">
          <div className="w-full">
            <input className={`w-full px-6 py-3 bg-white rounded-full text-gray-700 text-sm border ${
                error === null
                  ? "border-BrightRedLight"
                  : error
                  ? "border-red-500"
                  : "border-green-400"
              }`}
              type="email"
              name="inputTxt"
              id="inputTxt"
              placeholder="Updates in your inbox..."
              value={email}
              onChange={handleChange}
            />
            {/* Muestra el mensaje solo si hay un error */}
            {error !== null && (
              <p className={`mt-2 text-sm text-start pl-4 ${error ? "text-BrightRed" : "text-green-400"}`}> {error ? error : "Email is valid!"}</p>
            )}
            </div>
            <BtnStarted
              txtBtn="GO"
              style="bg-BrightRed text-VeryPaleRed px-8 py-4 hover:drop-shadow-3xl hover:opacity-75"
              onClick={validateEmail}
            />
        </div>  
        <p className="text-gray-600 text-center max-lg:hidden"> Copyright 2020. All Rights Reserved</p>
      </div>
      {/* Meunu */}
      <ul className="px-7 py-14 text-VeryLightGray flex items-start justify-between gap-8 leading-9 sm:justify-around lg:order-2 lg:gap-0">
        <div className="">
          <li className="hover:text-BrightRed hover:cursor-pointer max-w-fit">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-BrightRed hover:cursor-pointer max-w-fit">
            <a href="#">Pricing</a>
          </li>
          <li className="hover:text-BrightRed hover:cursor-pointer max-w-fit">
            <a href="#">Products</a>
          </li>
          <li className="hover:text-BrightRed hover:cursor-pointer max-w-fit">
            <a href="#">About us</a>
          </li>
        </div>
        <div className="">
          <li className="hover:text-BrightRed hover:cursor-pointer max-w-fit">
            <a href="#">Careers</a>
          </li>
          <li className="hover:text-BrightRed hover:cursor-pointer max-w-fit">
            <a href="#">Community</a>
          </li>
          <li className="hover:text-BrightRed hover:cursor-pointer max-w-fit">
            <a href="#">Privacy Policy</a>
          </li>
        </div>
      </ul>
      {/* social media icons */}
      <div className="flex flex-col items-center justify-center gap-y-12 mb-12 lg:order-1 lg:flex-col-reverse">
        <div className="flex items-center justify-center gap-5">
          <IconFacebook fill="white" height="35px" width="35px" />
          <IconYoutube fill="white" height="35px" width="35px"  />
          <IconTwitter fill="white" height="35px" width="35px" />
          <IconPinterest fill="white" height="35px" width="35px" />
          <IconInstagram fill="white" height="35px" width="35px" />
        </div>
        <LogoManage fill="white" />
        <p className="text-gray-600 text-center lg:hidden">Copyright 2020. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export { Footer };
