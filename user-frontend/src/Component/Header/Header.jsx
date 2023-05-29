import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>   
      <header className="site-navbar" role="banner">
        <div className="site-navbar-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
                <form action="" className="site-block-top-search">
                  <span className="icon icon-search2" />
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="Search"
                  />
                </form>
              </div>
              <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
                <div className="site-logo">
                  <Link to="/" className="js-logo-clone">
                    Shoppers
                  </Link>
                </div>
              </div>
              <div className="col-6 col-md-4 order-3 order-md-3 text-right">
                <div className="site-top-icons">
                  <ul>
                    <li>
                      <Link to="#">
                        <span className="icon icon-person" />
                      </Link>
                    </li>
                   
                    <li>
                      <Link to="#">
                        <span className="icon icon-heart-o" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/Cart" className="site-cart">
                        <span className="icon icon-shopping_cart" />
                        <span className="count">2</span>
                      </Link>
                    </li>
                    <li className="d-inline-block d-md-none ml-md-0">
                      <Link to="#" className="site-menu-toggle js-menu-toggle">
                        <span className="icon-menu" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/Signin">
                        <button className="btn btn-success">Signin</button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/Signup">
                      <button className="btn btn-primary">Signup</button>                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav
          className="site-navigation text-right text-md-center"
          role="navigation"
        >
          <div className="container">
            <ul className="site-menu js-clone-nav d-none d-md-block">
              <li className="has-children active">
                <Link to="/">Home</Link>
                <ul className="dropdown">
                  <li>
                    <Link to="#">Menu One</Link>
                  </li>
                  <li>
                    <Link to="#">Menu Two</Link>
                  </li>
                  <li>
                    <Link to="#">Menu Three</Link>
                  </li>
                  <li className="has-children">
                    <Link to="#">Sub Menu</Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="#">Menu One</Link>
                      </li>
                      <li>
                        <Link to="#">Menu Two</Link>
                      </li>
                      <li>
                        <Link to="#">Menu Three</Link>
                      </li>
                    </ul>
                  </li>

                  <li className="has-children">
                    <Link to="/about.html">About</Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="#">Menu One</Link>
                      </li>
                      <li>
                        <Link to="#">Menu Two</Link>
                      </li>
                      <li>
                        <Link to="#">Menu Three</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <a href="#">Sub Menu</a>
                    <ul className="dropdown">
                      <li>
                        <a href="#">Menu One</a>
                      </li>
                      <li>
                        <a href="#">Menu Two</a>
                      </li>
                      <li>
                        <a href="#">Menu Three</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="has-children">
                <Link to="/About" >About</Link>
                <ul className="dropdown">
                  <li>
                    <a href="#">Menu One</a>
                  </li>
                  <li>
                    <a href="#">Menu Two</a>
                  </li>
                  <li>
                    <a href="#">Menu Three</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/Shop" >Shop</Link>
              </li>
              <li>
                <a href="#">Catalogue</a>
              </li>
              <li>
                <a href="#">New Arrivals</a>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
   
    </>
  );
}

export default Header;
