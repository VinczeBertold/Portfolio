import { cookies } from "next/headers";
import ThemeSwitcher from "./ThemeSwitcher";

export default async function Navbar() {
  const cookieJar = cookies();
  return (
    <div className="navbar bg-base-300 p-2 text-base-content">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#work-education">Work & Education</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl hidden md:flex text-center">
          Bertold Vincze
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work-education">Work & Education</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-4">
        <ThemeSwitcher
          theme={cookieJar.get("portfolio-theme")?.value || "dark"}
        />
        <a
          className="btn btn-primary !rounded-sm w-32 hidden md:flex"
          href="#contact"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
