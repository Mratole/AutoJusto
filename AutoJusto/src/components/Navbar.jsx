import React from "react";
import Logo from "../assets/Logo.png";
import "../index.css";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="bg-white flex justify-between items-center p-4">
        <button className="flex-shrink-0">
          <img className="h-14 w-auto ml-2" src={Logo} alt="Logo" />
        </button>
        <button onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 md:hidden hover:text-slate-500 mr-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <div className="md:flex ml-auto hidden">
          <a
            className="transition duration-500 p-4 hover:text-slate-500 font-bold font-roboto"
            href="Inicio"
          >
            Inicio
          </a>
          <a
            className="transition duration-500 p-4 hover:text-slate-500 font-bold font-roboto"
            href="Servicios"
          >
            Servicios
          </a>
          <a
            className="transition duration-500 p-4 hover:text-slate-500 font-bold font-roboto"
            href="Testimonios"
          >
            Testimonios
          </a>
          <a
            className="transition duration-500 p-4 hover:text-slate-500 font-bold font-roboto"
            href="Transparencia"
          >
            Transparencia
          </a>
        </div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="transition duration-500 w-8 h-8 hover:text-slate-500 mr-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </button>
      </header>
      {isOpen && (
        <div className="flex justify-center items-center md:hidden">
          <div className="w-full items-center justify-center">
            <a
              className="transition duration-500 block hover:text-slate-500 text-center font-bold font-roboto py-2 "
              href="Inicio"
            >
              Inicio
            </a>
            <a
              className="transition duration-500 block  hover:text-slate-500 text-center font-bold font-roboto py-2"
              href="Servicios"
            >
              Servicios
            </a>
            <a
              className="transition duration-500 block  hover:text-slate-500 text-center font-bold font-roboto py-2"
              href="Testimonios"
            >
              Testimonios
            </a>
            <a
              className="transition duration-500 block  hover:text-slate-500 text-center font-bold font-roboto py-2"
              href="Transparencia"
            >
              Transparencia
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
