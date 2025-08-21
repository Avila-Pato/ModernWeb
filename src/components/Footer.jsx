import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/data";

const Footer = () => {
  return (
    <footer className="pt-16 xl:pt-20 w-full text-gray-500 bg-[#fffbee]">
      <div className="max-padd-container">
        <div className="flex flex-wrap justify-between gap-12 md:gap-6">
          <div className="max-w-80">
            <div className=" flex mb-4">
              <Link to={"/"}>
                <img
                  src={assets.logoImg}
                  alt="Logo"
                  className={` ${"invert"} h-11`}
                />
              </Link>
            </div>
            <p className="text-sm">
              Conecta con nosotros en las redes sociales para obtener las
              últimas actualizaciones y ofertas especiales.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <img src={assets.facebook} alt="" />
              <img src={assets.instagram} alt="" />
              <img src={assets.twitter} alt="" />
              <img src={assets.linkedin} alt="" />
            </div>
          </div>

          <div>
            <p className="text-lg text-gray-800">COMPANY</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-lg text-gray-800">SUPPORT</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Safety Information</a>
              </li>
              <li>
                <a href="#">Cancellation Options</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>
            </ul>
          </div>

          <div className="max-w-80">
            <p className="h4 text-gray-800">STAY UPDATED</p>
            <p className="mt-3 text-sm">
              Subscribe to our newsletter for inspiration and special offers.
            </p>
            <div className="flex items-center bordre pl-4 gap-2 bg-white border-gray-500/30 h-[46px] rounded-full 
            overflow-hidden max-w-md w-full mt-6 ">
              <input
                type="text"
                className="w-full h-full outline-none text-sm text-gray-500"
                placeholder="Tu correo.."
              />
              <button className="btn-dark font-medium !px-3.5 py-2 mr-0.5">Suscribete</button>
            </div>
          </div>
        </div>
        {/* <hr className="border-gray-300 mt-8" /> */}
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5 mt-8">
          <p>
            © {new Date().getFullYear()}{" "}
            <a href="/">Nestorria</a>. All rights
            reserved.
          </p>
          <ul className="flex items-center gap-4">
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
