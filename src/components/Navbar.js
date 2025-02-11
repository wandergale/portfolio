import style from "./Navbar.module.css";

import spider from "../assets/images/spider.png";

const Navbar = () => {
  return (
    <nav className={style.container}>
      <ul>
        <li>
          <a href="/">
            <img src={spider} alt="spider" />
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
    </nav>
  );
};

export default Navbar;
