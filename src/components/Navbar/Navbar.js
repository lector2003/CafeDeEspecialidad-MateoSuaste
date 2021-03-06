import { logDOM } from "@testing-library/react";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div>
        <img src = "imagenNav/logo.png" alt="LOGO DE CAFE" />
      </div>
      <div className="containerBtn">
        <button>Combos</button>
        <button>Promociones</button>
        <button>Productos</button>
        
      </div>
      <CartWidget/>
    </nav>
  );
};

export default Navbar;
