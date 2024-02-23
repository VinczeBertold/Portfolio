import { cookies } from "next/headers";
import ThemeSwitcher from "./ThemeSwitcher";

export default async function Navbar() {
  const cookieJar = cookies();
  return (
    <div className="navbar bg-base-300 p-2 text-base-content">
      <div className="navbar-start">
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
          className="btn btn-primary !rounded-sm w-32"
          href="#contact"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
