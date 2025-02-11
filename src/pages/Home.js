import style from "./Home.module.css";

import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <p>
          Olá<span>👋</span> sou Wanderson
        </p>
        <h3>Site em desenvolvimento...</h3>
      </div>
    </>
  );
};

export default Home;
