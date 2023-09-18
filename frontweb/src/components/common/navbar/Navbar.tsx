import "./navbar.css";
import '@popperjs/core';
import 'bootstrap/js/src/collapse';
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <header>
        <div className="container flex navbar-expand-md navbar-dark">
            
          <div className="logo">
            <Link to="/home">
              <img className="logo" src="../images/logo.png" alt="" />
            </Link>
          </div>
         
          <div className="nav collapse navbar-collapse" id="golocal-navbar">
            <ul className="navbar-nav">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/sobre">Sobre</Link>
              </li>
              <li>
                <Link to="/empresas">Empresas</Link>
              </li>
              <li>
                <Link to="/anuncios">Anúncios</Link>
              </li>
              <li>
                <Link to="/contato">Contato</Link>
              </li>
            </ul>
          </div>
          <Link to="/Login">
          <div className="button flex">
            <button className="btn1">
             <i className="fa fa-sign-out"> </i> Sign In
            </button>
          </div>
          </Link>

          {/* <div className="toggle">
                <button>
                    <i className="fa fa-bars"></i>
                </button>
  </div> */}
        </div>
      </header>
    </>
  );
};

export default Navbar;
