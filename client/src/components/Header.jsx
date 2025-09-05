import React, { useState, useEffect } from "react";
import { assets } from "../assets/data";
import Navbar from "./Navbar";
import { useClerk, UserButton } from "@clerk/clerk-react";
import { useAppContext } from "../context/AppContext";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  const {
    navigate,
    user,
    isOwner,
    setShowAgencyReg,
    loading,
    searchQuery,
    setSearchQuery,
  } = useAppContext();
  const { openSignIn } = useClerk();

  const toggleMenu = () => setMenuOpened((prev) => !prev);

  // 🔍 Buscador dinámico + redirección a /listing
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim().length > 0 && !location.pathname.includes("listing")) {
      navigate("/listing");
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [searchQuery]);

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/") {
        setActive(window.scrollY > 10);
      } else {
        setActive(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <header
      className={`${
        active ? "bg-primary py-3 shadow-md" : "bg-none py-5"
      } fixed w-full z-30 transition-all`}
    >
      <div className="max-padd-container">
        <div className="flexBetween">
          {/* Logo */}
          <div className="flex flex-1">
            <Link to={"/"}>
              <img
                src={assets.logoImg}
                alt="Logo"
                className={`${!active && "invert"} h-11`}
              />
            </Link>
          </div>

          {/* Navbar */}
          <Navbar
            setMenuOpened={setMenuOpened}
            containerStyles={`${
              menuOpened
                ? "flex items-center flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white shadow-md w-52 ring-1 ring-slate-900/5 rounded-xl z-50"
                : "hidden lg:flex gap-x-5 xl:gap-x-1 p-1"
            } ${!menuOpened && !active ? "text-white" : ""}`}
          />

          {/* Botones, perfil y buscador */}
          <div className="flex sm:flex-1 items-center sm:justify-center gap-x-4 sm:gap-x-8">
            <div>
              {user && !loading && (
                <button
                  onClick={() =>
                    isOwner ? navigate("/owner") : setShowAgencyReg(true)
                  }
                  className={`btn-outline px-2 py-1 text-xs font-semibold ${
                    !active &&
                    "text-primary ring-primary bg-transparent hover:text-black"
                  } bg-secondary/10 hover:bg-white`}
                >
                  {isOwner ? "Dashboard" : "Registrar Agencia"}
                </button>
              )}
            </div>

            {/* 🔍 Searchbar */}
            <div className="relative hidden lg:flex items-center">
              <div
                className={`${
                  active ? "bg-secondary/10" : "bg-white"
                } transition-all duration-300 ease-in-out ring-1 ring-slate-900/10 rounded-full overflow-hidden ${
                  showSearch
                    ? "w-[266px] opacity-100 px-12 py-2"
                    : "w-11 opacity-0 px-0 py-0"
                }`}
              >
                <input
                  value={searchQuery}
                  onChange={handleSearchChange}
                  type="text"
                  placeholder="Search"
                  className="w-full outline-none text-sm pr-10 placeholder:text-gray-400"
                />
              </div>
              {/* Icono Search */}
              <div
                onClick={() => setShowSearch((prev) => !prev)}
                className={`${
                  active ? "bg-secondary/10" : "bg-primary"
                } absolute right-0 ring-1 ring-slate-900/10 p-[8px] rounded-full cursor-pointer z-10`}
              >
                <img src={assets.search} alt="Search Icon" />
              </div>
            </div>

            {/* Menú móvil */}
            <>
              {menuOpened ? (
                <img
                  src={assets.close}
                  alt="closeIcon"
                  onClick={toggleMenu}
                  className={`${!active && "invert"} lg:hidden cursor-pointer text-xl`}
                />
              ) : (
                <img
                  src={assets.menu}
                  alt="openIcon"
                  onClick={toggleMenu}
                  className={`${!active && "invert"} lg:hidden cursor-pointer text-xl`}
                />
              )}
            </>
            <div className="group relative top-1">
              {/* User */}
              <div>
                {user ? (
                  <UserButton
                    appearance={{
                      elements: {
                        userButtonAvatarBox: {
                          width: 40,
                          height: 40,
                          borderRadius: "100%",
                        },
                      },
                    }}
                  >
                    <UserButton.MenuItems>
                      <UserButton.Action
                        label="My Booking"
                        labelIcon={assets.BookingIcon}
                        onClick={() => navigate("/my-bookings")}
                      />
                    </UserButton.MenuItems>
                  </UserButton>
                ) : (
                  <button
                    onClick={openSignIn}
                    className="btn-secondary flexCenter gap-2 rounded-full"
                  >
                    Login
                    <img src={assets.user} alt="User Icon" className="w-6 h-6" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
