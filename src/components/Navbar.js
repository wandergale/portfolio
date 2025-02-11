import style from "./Navbar.module.css";

import { useRef } from "react";

import spider from "../assets/images/spider.png";

const Navbar = () => {
  const sidebarRef = useRef(null);

  const showSidebar = () => {
    if (sidebarRef.current) {
      sidebarRef.current.style.display = "flex";
    }
  };

  const hideSidebar = () => {
    if (sidebarRef.current) {
      sidebarRef.current.style.display = "none";
    }
  };

  return (
    <nav className={style.container}>
      {/* Mobile */}
      <ul ref={sidebarRef} className={style.sidebar}>
        <li>
          <a href="/#" onClick={hideSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26px"
              viewBox="0 -960 960 960"
              width="26px"
              fill="#e8eaed"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </a>
        </li>
        <li>
          <a className={style.link_} href="#about">
            About
          </a>
        </li>
        <li>
          <a className={style.link_} href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className={style.link_} href="#contact">
            Contact
          </a>
        </li>
      </ul>
      {/* Desktop */}
      <ul className={style.desktop}>
        <li>
          <a href="/">
            <img src={spider} alt="spider" />
          </a>
        </li>
        <li className={style.hideOnMobile}>
          <a className={style.link_} href="#about">
            About
          </a>
        </li>
        <li className={style.hideOnMobile}>
          <a className={style.link_} href="#projects">
            Projects
          </a>
        </li>
        <li className={style.hideOnMobile}>
          <a className={style.link_} href="#contact">
            Contact
          </a>
        </li>
        <li className={style.menuBtn}>
          <a href="/#" onClick={showSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26px"
              viewBox="0 -960 960 960"
              width="26px"
              fill="#e8eaed"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
