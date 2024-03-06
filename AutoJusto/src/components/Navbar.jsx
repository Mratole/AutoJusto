import React from "react";
import Logo from "../assets/Logo.png";
import "../styles/navbar.css";

export function Navbar() {
  return (
    <header className="bg-white flex justify-between items-center p-4">
      <button className="flex-shrink-0">
        <img className="h-14 w-auto ml-2" src={Logo} alt="Logo" />
      </button>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 sm:hidden hover:text-slate-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <div className="sm:flex ml-auto hidden">
        <a className="p-4 hover:text-slate-500 border-lime-200" href="Inicio">
          Inicio
        </a>
        <a className="p-4 hover:text-slate-500" href="Servicios">
          Servicios
        </a>
        <a className="p-4 hover:text-slate-500" href="Testimonios">
          Testimonios
        </a>
        <a className="p-4 hover:text-slate-500" href="Transparencia">
          Transparencia
        </a>
        <button className="p-4 hover:bg-slate-300 hover:text-slate-500 bg-cyan-200 rounded-xl flex mr-2">
          Contáctanos
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 hover:text-slate-500 mr-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </button>
    </header>
  );
}
