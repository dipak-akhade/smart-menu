import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              WhatsMenu
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Aboutus">
                    About Us
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Menu
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="dropdown-item" href="/SoupandSalad">
                        Soups & Salads
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/Starters">
                        Starters
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/Breakfast">
                        Breakfast
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/MainCourse">
                        Main Course
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/Rice&biryani">
                        Rice & biryani
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/Pizza&Pasta">
                        Pizza & Pasta
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/Noodles">
                        Noodles
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/Burger&Sandwitches">
                        Burger & Sandwitches
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/Desserts">
                        Desserts
                      </a>{" "}
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
