import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import learn from "../../img/book-half.svg";
import box from "../../img/box-fill.svg";
import about from "../../img/braces.svg";

function Menu() {
  const location = useLocation();
  const docFavicon = document.createElement("link");
  document.head.appendChild(docFavicon);
  docFavicon.rel = "icon";
  React.useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Julio Filizzola";
        docFavicon.href =
          "https://avatars.githubusercontent.com/u/65046505?v=4";
        break;
      case "/sobre":
        document.title = "Sobre";
        docFavicon.href = about;
        break;
      case "/projetos":
        document.title = "Meus Projetos";
        docFavicon.href = box;
        break;
      case "/estudos":
   
        document.title = "Estudos";
        docFavicon.href = learn;
        break;
      default:
        docFavicon.href =
          "https://avatars.githubusercontent.com/u/65046505?v=4";
    }
  });
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-gradient bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Julio Filizzola
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/projetos">
                  Projetos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/estudos">
                  Estudo
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sobre">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Menu;
